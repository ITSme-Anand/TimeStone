
var button = document.querySelector(".add-task");
var taskPopup = document.querySelector(".popup");
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskName = document.querySelector('input[name="taskName"]');
    const startTime = document.querySelector('input[name="startTime"]');
    const endTime = document.querySelector('input[name="endTime"]');
    let error = false;

    if (taskName.value === '') {
        showError(taskName, 'Task name is required');
        error = true;
    }

    if (startTime.value === '') {
        showError(startTime, 'Start time is required');
        error = true;
    }

    if (endTime.value === '') {
        showError(endTime, 'End time is required');
        error = true;
    }

    if (!error) {
        this.submit();
    }
});

function showError(input, message) {
    const errorElement = document.createElement('div');
    errorElement.style.color = 'red';
    errorElement.textContent = message;
    input.parentNode.insertBefore(errorElement, input.nextSibling);
}
button.onclick = ()=>{
    button.style.display = "none";
    taskPopup.style.display = "flex";
    btn = document.querySelector(".addTask")

    btn.onclick = ()=>{
        taskPopup.style.display = "none";
        button.style.display = "flex";
    };};

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


var logOutBtn = document.querySelector(".logOutBtn");
logOutBtn.addEventListener("click",(event)=>{
    axios.post('logout')
    .then(response => console.log(response.data))
    .catch(error => console.error('Error:', error));
})

    var Tasks = document.getElementsByClassName("tasks");
    for (var i = 0; i < Tasks.length; i++) {
        console.log(Tasks[i].getAttribute("name")); // Access the 'name' property using getAttribute
        Tasks[i].addEventListener('click', function (event) {
            var taskName = document.getElementsByClassName("taskName");
            var task_ = taskName[0];
            for (var i = 0; i < taskName.length; i++) {
                if (taskName[i].innerHTML.trim() == this.getAttribute("name")){
                    console.log(taskName[i]);
                    task_ = taskName[i];
                    console.log(task_);
                    break;
                }
            }
            if (this.checked) {
                task_.style.textDecoration = "line-through";
            } else {
                task_.style.textDecoration = "none";
            }
            axios.post('http://localhost:3000/UpdateTask', {
                    "task_name": this.getAttribute("name"),
                    "task_status": this.checked ? "completed" : "incomplete"
                })
                .then(response => console.log(response.data))
                .catch(error => console.error('Error:', error));
        });
    }


    var deleteTaskBtns = document.getElementsByClassName('deleteIcon');
    for(var i = 0;i<deleteTaskBtns.length;i++){
        deleteTaskBtns[i].addEventListener('click',function(event){
            axios.post('http://localhost:3000/deleteTask',{
                "task_name": this.getAttribute("id"),
                
            })
            .then(response => console.log(response.data),window.location.reload())
            .catch(error => console.error('Error:', error));
        })
    }


