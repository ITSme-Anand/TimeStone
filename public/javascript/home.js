
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
    }

    
}