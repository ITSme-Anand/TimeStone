
var button = document.querySelector(".add-task");
var taskPopup = document.querySelector(".popup");

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
    }};
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

    var deleteTaskBtn = document.querySelector('.deleteIcon');
    deleteTaskBtn.addEventListener('click', function(event){
        axios.post('http://localhost:3000/deleteTask',{
            "task_name": this.getAttribute("id"),
            
        })
        .then(response => console.log(response.data),window.location.reload())
        .catch(error => console.error('Error:', error));
    })


