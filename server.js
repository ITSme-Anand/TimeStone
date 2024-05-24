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
// Configure body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Define a Task schema-------------------------------------
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
    },
    status:{
        type:String,
        default:"incomplete"
    }
})

function getRandomString() {
    return Math.random().toString(36).substring(2, 15);
}

//Define a Habit Tracker-----------------------------------
const HabitSchema = new mongoose.Schema({
    habitName:{
        type:String,
        required:true
    },
    Days:{
        type:Array,
        required:true
    },
    startTime:{
        type:String,
        required:true
    },
    endTime:{
        type:String,
        required:true
    },
    status:{
        type:Array,
        default:["incomplete","incomplete","incomplete","incomplete","incomplete","incomplete","incomplete"]
    },
    id:{
        type:String,
        default:getRandomString,
    }
})
Task = mongoose.model('Tasks',TaskSchema);

Habit = mongoose.model('Habits',HabitSchema);


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
});

app.post('/UpdateTask', async (req, res) => {
    console.log(req.body);
    const task = req.body.task_name;
    const status = req.body.task_status;
    try {
        const doc = await Task.findOneAndUpdate({taskName: task}, {status: status});
        console.log(doc);
        res.status(200).send("Updated");
    } catch (err) {
        console.log("Something wrong when updating data!", err);
        res.status(400).send("Error");
    }
});

app.post('/updateHabit',async (req,res)=>{
    const habitName = req.body.habitName;
    const day= req.body.day;
    const query = {
        habitName: habitName,
      };
      let dayNum;

      switch(day) {
          case 'Mon':
              dayNum = 0;
              break;
          case 'Tue':
              dayNum = 1;
              break;
          case 'Wed':
              dayNum = 2;
              break;
          case 'Thu':
              dayNum = 3;
              break;
          case 'Fri':
              dayNum = 4;
              break;
          case 'Sat':
              dayNum = 5;
              break;
          case 'Sun':
              dayNum = 6;
              break;
      }
      
    query[`Days.${dayNum}`] = day;
    const doc = await Habit.findOne(query);
    let oldStatus = doc.status[dayNum];
    let newStatus;
    if(oldStatus=="completed"){
        newStatus = "incomplete";
    }
    else{
        newStatus = "completed";
    }
    let updatequery = {};
    updatequery[`status.${dayNum}`] = newStatus;
    try{
        const doc2 = await Habit.findOneAndUpdate(query,updatequery);
        res.status(200).send("Updated");
    }
    catch (err) {
        console.log("Something wrong when updating data!", err);
        res.status(400).send("Error");
    }
    
})

app.post('/deleteTask', async(req,res)=>{
    console.log(req.body);
    const task = req.body.task_name;
    console.log(task)
    try{
        const doc = await Task.findOneAndDelete(
            {"taskName":task}
        )
        console.log(doc);
        res.status(200).send("updated");
        
    }
    catch(err){
        console.log("Something wrong when deleting data!", err);
        res.status(400).send("Error");
    }
})

app.post('/habit',async(req,res)=>{
    const habit = new Habit(
        {
            habitName: req.body.habitName,
            startTime: req.body.startTime,
            endTime: req.body.endTime,
            Days: [req.body.Mon , req.body.Tue , req.body.Wed , req.body.Thu , req.body.Fri, req.body.Sat, req.body.Sun]

        }
    );
    console.log(req.body);
    try{
        const newHabit = await habit.save();
        res.redirect("/habitTracker");
    }
    catch(err){
        console.log(err);
    }
})

app.get('/habitTracker',async(req,res)=>{

    var habitDetails = await Habit.find();
    res.render('habitTracker',{habitDetails:habitDetails});

})






const userRouter = require('./routes/auth');
const { type } = require('os');
app.use('/auth',userRouter);
app.listen(3000);
