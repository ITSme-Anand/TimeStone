const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const PORT = process.env.PORT
const MONGOURL = process.env.MONGO_URL

mongoose.connect(MONGOURL).then(()=>{console.log("Database is connected")).catch((error)=>(console.log(error)))
var path = require('path')
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));

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