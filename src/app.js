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
const limit = 3;
const filePath = path.join(__dirname, '../data.json');

app.get('/', (req, res) => {
  let data = [];
  let pizzaData = fs.readFileSync(filePath);
  pizzaData = JSON.parse(pizzaData);

  data = pizzaData;
  let pizzaPages = data.slice(0, 2);
  let maxPages = Math.ceil(data.length / limit);
  res.render('index', { pizzaPages: pizzaPages, maxPages: maxPages  });
});

app.get('/index/:id', (req, res) => {
    let page = req.params.id;
    let data = [];
    let pizzaData = fs.readFileSync(filePath) || null;

    pizzaData = JSON.parse(pizzaData);
    data = pizzaData;

    let maxPages = data.length / limit;
    let startIndex = (page - 1) * limit;
    let endIndex = page * limit;   
    let pizzaPages = data.slice(startIndex, endIndex);
  res.render('index', {pizzaPages: pizzaPages, page: page, maxPages: maxPages });
});

app.get('/addPizza', (req, res)=> {
    res.render('addPizza')
})

app.post('/savePizza', upload.single('image'), (req, res) => {
   const body = req.body;
   const file = req.file;
   console.log(file);
   const pizzaData = {
    name: body.name,
    description: body.description,
    filePath: file.filename
  }

   let fileData = fs.readFileSync(path.join(__dirname, '../data.json'), { encoding: 'utf8'}) || [];
   fileData = JSON.parse(fileData);

   fileData.push(pizzaData);

   fs.writeFileSync(path.join(__dirname, '../data.json'), JSON.stringify(fileData))


   res.redirect('/addPizza');
});

const port = 3000;
app.listen(port, () => { console.log(`Webserver listen on Port: ${port}`)});