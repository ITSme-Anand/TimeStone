const express = require('express');
const app = express();
const mongoose = require('mongoose');
PORT = 3000
MONGO_URL ="mongodb://localhost:27017/ProductivityAppUsers"
mongoose.connect(MONGO_URL).then(()=>{console.log("Database is connected");
app.get(PORT,(req,res)=>{
    console.log("connected")
})}).catch((error)=>(console.log(error)))
var path = require('path')
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));``

// app.get('/',(req,res)=>{
//     res.render('home')
// })
// const bodyParser = require('body-parser');

// // Configure body-parser
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.post('/task',async(req,res)=>{
//     console.log(req.body);

// })
// app.listen(3000);