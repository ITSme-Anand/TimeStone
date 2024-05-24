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

    schedule.appendChild(timeline1);
    schedule.appendChild(timeline2);
}
for(let i=0;i<24;i++){
    hour(i);
}
const now = new Date();
const currentHour = now.getHours();
const currentMinute = now.getMinutes();
console.log(currentHour);
console.log(currentMinute);

// Calculate the position of the line
const position = (currentHour * 60 + currentMinute);
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
line.style.top = `${position}px`; // set the position
line.style.width = '100%';
line.style.borderTop = '1px solid red'; // make it a red line

// Add the line to the schedule
schedule.appendChild(line);
const tasks = document.querySelectorAll('.task');
const close = document.querySelector('.close');
var popup = document.querySelector('.popup');
popup.style.display = 'none';
close.addEventListener('click', () => {
    popup.style.display = 'none';
})

tasks.forEach(task => {
    var original_task = document.createElement('input');
    original_task.type = 'hidden';
    original_task.name = 'OriginalTaskName';
    original_task.value = task.dataset.taskName;
    const taskName = task.dataset.taskName;
    const startTime = task.dataset.startTime;
    const endTime = task.dataset.endTime;
    console.log(taskName, startTime, endTime);
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('taskDiv');
    taskDiv.style.top = `${getTopPosition(startTime)}px`;
    taskDiv.style.height = `${getsize(startTime, endTime)}px`;
    taskDiv.innerHTML = taskName;
    taskDiv.addEventListener('click', () => {
        popup.style.display = 'flex';
        popup.querySelector('input[name="taskName"]').value = taskName;
        popup.querySelector('input[name="startTime"]').value = startTime;
        popup.querySelector('input[name="endTime"]').value = endTime;
        popup.appendChild(original_task);
    });
    schedule.appendChild(taskDiv);
    // Now you can use taskName, startTime, and endTime
});



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