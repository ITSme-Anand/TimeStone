
var button = document.querySelector(".add-task");
button.onclick = ()=>{
    button.style.display = "none";
    var taskadder = document.querySelector(".popup")
    taskadder.style.display = "flex";
    btn = document.querySelector(".addTask")

    btn.onclick = ()=>{
        taskadder.style.display = "none";
        button.style.display = "block";
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
            console.log("hey");
            console.log(this.checked);
            axios.post('http://localhost:3000/UpdateTask', {
                "task_name": this.getAttribute("name"),
                "task_status": this.checked ? "completed" : "incomplete"
            })
            .then(response => console.log(response.data))
            .catch(error => console.error('Error:', error));

        });
    }
