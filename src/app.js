const express = require('express');
const path = require('path')

const app = express();
app.use(express.static(path.join(__dirname, '../images')));
app.use(express.static(path.join(__dirname, '../views')));
app.use(express.static(path.join(__dirname, '../OUTPUT')));


app.get('/index', (req, res) => {
    console.log(123)
    //res.redirect('./index.html');
    //res.sendFile('index.html', {root: path.join(__dirname,'../views')});
    res.sendFile(path.join(__dirname,'../views/index.html'));
});

app.get('/savePizza', (req, res) => {
   const pizza =  req.query;
   console.log(pizza);
   res.redirect('index.html');
});

const port = 3000;
app.listen(port, () => { console.log(`Webserver listen on Port: ${port}`)});