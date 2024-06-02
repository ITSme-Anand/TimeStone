var menuBtn = document.querySelector(".topMenuBtn");
menuBtn.onclick = ()=>{
    var navigationBar = document.querySelector(".navigation");
    
    var displayNav = navigationBar.getAttribute("style");
    console.log(displayNav.endsWith("none;"))
    if(displayNav.endsWith("none;")){
        navigationBar.style.display = "block";
    }
    else{
        navigationBar.style.display = "none";
    }
};



const MainDiv = document.getElementsByClassName('mainDiv');

const timings = document.querySelector('.timings');
const schedule = document.querySelector('.schedule');
function hour(label){
    
    const time = document.createElement('div');
    time.classList.add('time');
    time.id = label;
    time.innerHTML = label;

    timings.appendChild(time);

    const timeline1 = document.createElement('div');
    timeline1.classList.add('halfhour');
    timeline1.id = label+':00';
    
    const timeline2 = document.createElement('div');
    timeline2.classList.add('halfhour');
    timeline2.id = label+':30';

    timeline1.addEventListener('click', () => {
        popup.style.display = 'none';
        popup2.style.display = 'flex';
        popup.style.display = 'none';
        popup2.querySelector('input[name="startTime"]').value = `${label}:00`;
        popup2.querySelector('input[name="endTime"]').value = `${label+1}:00`;
    }
    );
    timeline2.addEventListener('click', () => {
        popup.style.display = 'none';
        popup2.style.display = 'flex';
        popup.style.display="none";
        popup2.querySelector('input[name="startTime"]').value = `${label}:30`;
        popup2.querySelector('input[name="endTime"]').value = `${label+1}:00`;
    });
    schedule.appendChild(timeline1);
    schedule.appendChild(timeline2);
}
for(let i=0;i<24;i++){
    const hourLabel = i.toString().padStart(2, '0');
    hour(hourLabel);
}
const now = new Date();
const currentHour = now.getHours();
const currentMinute = now.getMinutes();
// Calculate the position of the line
const menuHeight = 31.20;
const position = (currentHour * 60 + currentMinute + menuHeight);
console.log(position) // each half hour div is 30px
function getTopPosition(StartTime) {
    const [hour, minute] = StartTime.split(':').map(Number);
    return hour * 60 + minute;
}
function getsize(startTime, endTime) {
    const start = startTime.split(':');
    const end = endTime.split(':');
    const hour = parseInt(end[0]) - parseInt(start[0]);
    const minute = parseInt(end[1]) - parseInt(start[1]);
    return hour * 60 + minute;
}
// Create a new div for the line
const line = document.createElement('div');
line.style.position = 'absolute';
// line.style.top = '0px'; // set the position
line.style.top = `${position-menuHeight}px`; // set the position
line.style.width = '100%';
line.style.borderTop = '1px solid red'; // make it a red line

// Add the line to the schedule
schedule.appendChild(line);
const tasks = document.querySelectorAll('.task');
const close = document.querySelector('.close');
var popup = document.querySelector('.popup');
var popup2 = document.querySelector('.popup2');
console.log(popup2);
const closeBtn = document.querySelector('.addTask_close');
popup.style.display = 'none';
popup2.style.display = 'none';
close.addEventListener('click', () => {
    popup.style.display = 'none';
})
closeBtn.addEventListener('click', () => {
    popup2.style.display = 'none';
})

tasks.forEach(task => {
    var original_task = document.createElement('input');
    original_task.type = 'hidden';
    original_task.name = 'OriginalTaskName';
    original_task.value = task.dataset.taskName;
    const taskName = task.dataset.taskName;
    const startTime = task.dataset.startTime;
    const endTime = task.dataset.endTime;
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('taskDiv');
    taskDiv.style.top = `${getTopPosition(startTime)}px`;
    taskDiv.style.height = `${getsize(startTime, endTime)}px`;
    taskDiv.innerHTML = taskName;
    taskDiv.addEventListener('click', () => {
        popup2.style.display = 'none';
        popup.style.display = 'flex';
        popup2.style.display = "none";
        popup.querySelector('input[name="taskName"]').value = taskName;
        popup.querySelector('input[name="startTime"]').value = startTime;
        popup.querySelector('input[name="endTime"]').value = endTime;
        popup.appendChild(original_task);
    });
    schedule.appendChild(taskDiv);
    // Now you can use taskName, startTime, and endTime
});


const updateTaskForm = document.querySelector("#updateTaskForm");
updateTaskForm.addEventListener('submit', (event)=>{
    taskName = document.querySelector("#taskName");
    startTime = document.querySelector('#startTime');
    endTime = document.querySelector("#endTime");
    var error = false;
    let timeError = false;
    let taskNameErrorDiv = document.querySelector("#taskNameErrorDiv");
    let timeErrorDiv = document.querySelector("#timeErrorDiv");
    if(taskName.value===''){
        console.log("working");
        taskNameErrorDiv.innerHTML = '<span class="material-symbols-outlined">warning</span><p>Taskname required!</p>';
        taskNameErrorDiv.classList.add("errorDiv");
        error=true;
    }
    if(!error){
        taskNameErrorDiv.innerHTML = '';
        taskNameErrorDiv.classList.remove("errorDiv");
    }
    if(startTime.value ==='' || endTime.value === ''){
        timeErrorDiv.innerHTML = '<span class="material-symbols-outlined">warning</span><p>Time must be filled!</p>';
        timeErrorDiv.classList.remove("errorDiv");
        timeErrorDiv.classList.add("errorDiv");
        error=true;
        timeError=true;
    }
    if(!timeError){
        timeErrorDiv.innerHTML = "";
        timeErrorDiv.classList.remove("errorDiv");
    }
    if(error){
        event.preventDefault();
        popup.style.display = "flex";
    }
    
})


const addTaskForm = document.querySelector("#addTaskForm");
addTaskForm.addEventListener('submit', (event)=>{
    addtaskName = document.querySelector("#addTaskInput");
    addstartTime = document.querySelector('#addstartTime');
    addendTime = document.querySelector("#addendTime");
    var error = false;
    let timeError = false;
    let addtaskNameErrorDiv = document.querySelector("#addTaskNameErrorDiv");
    let addtimeErrorDiv = document.querySelector("#addTimeErrorDiv");
    if(addtaskName.value===''){
        console.log("working");
        addtaskNameErrorDiv.innerHTML = '<span class="material-symbols-outlined">warning</span><p>Taskname required!</p>';
        addtaskNameErrorDiv.classList.add("errorDiv");
        error=true;
    }
    if(!error){
        addtaskNameErrorDiv.innerHTML = '';
        addtaskNameErrorDiv.classList.remove("errorDiv");
    }
    if(addstartTime.value ==='' || addendTime.value === ''){
        addtimeErrorDiv.innerHTML = '<span class="material-symbols-outlined">warning</span><p>Time must be filled!</p>';
        addtimeErrorDiv.classList.remove("errorDiv");
        addtimeErrorDiv.classList.add("errorDiv");
        error=true;
        timeError=true;
    }
    if(!timeError){
        addtimeErrorDiv.innerHTML = "";
        addtimeErrorDiv.classList.remove("errorDiv");
    }
    if(error){
        event.preventDefault();
        popup2.style.display = "flex";
    }
    
})




// let curr = document.getElementById('9:00 AM');

// function fun(){
    
//     curr.scrollIntoView({ behavior: "auto", block: "center", inline: "center" })
// }



// function floatingdiv(){
//     const div = document.createElement('div');
//     div.classList.add('floatingdiv');
//     div.innerText = "Event 1";
//     container.appendChild(div);
// }

// floatingdiv()