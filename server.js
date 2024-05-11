const express = require('express');
const app = express();
var path = require('path')

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.render('home')
    res.render('navbar')
})
app.post('/',async(req,res)=>{
    console.log(req.body);
})
app.listen(3000);