const express = require('express')
const user = require('../model/userClass.js');
const router = express.Router();
const user_model = 
router.post('/login/post',(req,res)=>{
    console.log(req.body);

    res.send('logged in')
})
router.get('/login',(req,res)=>{
    res.render('login')
    
})
router.post('/register/post',(req,res)=>{
    console.log(req.body);
    user1 = new user(req.body.username,req.body.password);
    user1.save();
    res.send('registered');
})
router.get('/register',(req,res)=>{
    res.render('register')
})
module.exports = router