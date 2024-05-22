
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
    }

    
}
var Tasks = document.querySelector(".tasks");
console.log(Tasks)

