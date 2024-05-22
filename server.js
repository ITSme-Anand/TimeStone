const express = require('express');
const app = express();
const mongoose = require('mongoose');
var path = require('path');

require('dotenv').config()
PORT = 3000

mongoose.connect(process.env.MONGO_URL)
const db = mongoose.connection
db.on('error',(error)=>{console.log(error)})
db.once('open',()=>{console.log("Connected to Database");})
app.use(express.static(path.join(__dirname,'public')));
const session = require('express-session');
app.use(session({
    secret: 'secret key',
    resave:false,
    saveUninitialized: false
}))
app.set('view engine','ejs');
const bodyParser = require('body-parser');
const TaskSchema = new mongoose.Schema({
    taskName:{
        type:String,
        required:true
    },
    priority:{
        type:String,
        required:true
    },
    startTime:{
        type:String,
        required:true
    },
    endTime:{
        type:String,
        required:true
    }
})
Task = mongoose.model('Tasks',TaskSchema);
// Configure body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/home', async(req, res) => {
    /*if (req.session.isAuth) {
        res.render('home');
    } else {
        res.redirect('/auth/login');
    }*/
    var taskdetails = await Task.find();
    console.log(taskdetails)
    res.render('home',{taskdetails:taskdetails});
});

app.post('/task',async(req,res)=>{
    const task = new Task(
     {
        taskName:req.body.taskName,
        priority:req.body.priority,
        startTime:req.body.startTime,
        endTime:req.body.endTime
    }
        );
    console.log(req.body);
    try {
        const newTask = await task.save();
        //res.status(201).json(newTask);
        res.redirect("/home");
    }
    catch(err){
        console.log(err)
    }
})

const userRouter = require('./routes/auth');
const { type } = require('os');
app.use('/auth',userRouter);
app.listen(3000);
