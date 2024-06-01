const express = require('express')
const User = require('../model/userClass.js');
const router = express.Router();
const session = require('express-session');
const MongoDBSession = require('connect-mongodb-session')(session);
const store = new MongoDBSession({
    uri:'mongodb://localhost:27017/sessions',
    collection: "mySessions",
});

router.use(session({
    secret: 'secret key',
    resave:false,
    saveUninitialized: false,
    store:store,
}));

router.post('/login/post', async (req, res) => {
    console.log(req.body);
    var user = await User.getUser(req.body.username, req.body.password);
    console.log(user.status);
    if (user.status == 200) {
        req.session.isAuth = true;
        req.session.save();
        console.log(req.session);
        res.redirect(301, '/home');
        return;
    } else if (user.status == 400) {
        res.redirect('/auth/login');
        return;
    } else {
        res.redirect('/auth/register');
        return;
    }
});



router.get('/login',(req,res)=>{
    console.log(req.session);
    console.log(req.session.id);
    res.render('login');
    
})
router.post('/register/post',(req,res)=>{
    console.log(req.body);
    user1 = new User(req.body.username,req.body.password);
    user1.save();
    res.redirect('/auth/login');
})
router.get('/register',(req,res)=>{
    res.render('register')
})

module.exports = router