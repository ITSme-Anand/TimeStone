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