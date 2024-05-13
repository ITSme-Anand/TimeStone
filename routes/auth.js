const express = require('express')
const User = require('../model/userClass.js');
const router = express.Router();

router.post('/login/post',async(req,res)=>{
    console.log(req.body);
    var user = await User.getUser(req.body.username,req.body.password)
    if (user.status=='correct password'){
        res.redirect(301,'/home');
        return;
    }
    else if(user.status=='wrong password'){
        res.redirect('/auth/login');
        return;
    }
    else{
        res.redirect('/auth/register');
        return;
    }
})

router.get('/login',(req,res)=>{
    res.render('login');
    
})
router.post('/register/post',(req,res)=>{
    console.log(req.body);
    user1 = new User(req.body.username,req.body.password);
    user1.save();
    res.send('registered');
})
router.get('/register',(req,res)=>{
    res.render('register')
})
module.exports = router