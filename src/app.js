const express = require('express');
const path = require('path');
const fs = require('fs');
const multer = require('multer');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.use(express.static(path.join(__dirname, '../images')));
app.use(express.static(path.join(__dirname, '../views/styles')));
app.use(express.urlencoded( { extended: true }))

 const storage = multer.diskStorage( {
        destination: (req, file, cb) => {
            cb(null, path.join(__dirname, '../images'))
        },

        filename: (req, file, cb) => {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
            cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
        }
    })

const upload = multer( { storage: storage} )
const limit = 6;
const filePath = path.join(__dirname, '../data.json');


app.get('/', (req, res) => {
  let data = [];
  let pizzaData = fs.readFileSync(filePath);
  pizzaData = JSON.parse(pizzaData);

  data = pizzaData;
  let pizzaPages = data.slice(0, 6);

  let maxPages = Math.ceil(data.length / limit);
  res.render('index', { pizzaPages: pizzaPages, maxPages: maxPages, page: 1 });
});

app.get('/index', (req, res) => {

  res.redirect('/');
});



app.get('/index/:id', (req, res) => {
    let page = parseInt(req.params.id);
    let data = [];
    let pizzaData = fs.readFileSync(filePath) || null;

    pizzaData = JSON.parse(pizzaData);
    data = pizzaData;

    let maxPages = Math.ceil(data.length / limit);
    let startIndex = (page - 1) * limit;
    let endIndex = page * limit;   
    let pizzaPages = data.slice(startIndex, endIndex);
    
    res.render('index', {pizzaPages: pizzaPages, page: page, maxPages: maxPages});
});

app.post('/search', (req, res) => {
  const val = req.body.search;
  let startIndex = 0;
  let endIndex = 6;
  let data = [];
  let filteredData = [];
  let pizzaData = fs.readFileSync(filePath) || null;
  pizzaData = JSON.parse(pizzaData);
  data = pizzaData;

  let i = 0;
  while(i < data.length) {
    if(data[i].name.indexOf(val) !== -1 || data[i].description.indexOf(val) !== -1) {
      filteredData.push(data[i]);
    };
    i++;
  };

  let pizzaPages = filteredData.slice(startIndex, endIndex);
  res.render(`index`, { pizzaPages: pizzaPages, page: null, maxPages: 0 } )
});

app.get('/addPizza', (req, res)=> {
    res.render('addPizza')
})

app.post('/savePizza', upload.single('image'), (req, res) => {
   const body = req.body;
   const file = req.file;
   if(!body.name || !body.description || !file) {
    return res.redirect('/index');
   }
   const pizzaData = {
    name: body.name,
    description: body.description,
    filePath: file ? file.filename : null
  }

    let fileData = fs.readFileSync(path.join(__dirname, '../data.json'), { encoding: 'utf8'}) || [];
    fileData = JSON.parse(fileData);
    
    fileData.push(pizzaData);
    
    fs.writeFileSync(path.join(__dirname, '../data.json'), JSON.stringify(fileData))
    
    res.redirect('/addPizza');
});

const port = 3000;
app.listen(port, () => { console.log(`Webserver listen on Port: ${port}`)});