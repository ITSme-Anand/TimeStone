var buttonflag = 0;
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
    var navigationBar = document.querySelector(".navbar");
    if(buttonflag==0){
        buttonflag=1;
         navigationBar.style.display= "block";
    }
    else{
        buttonflag=0;
        navigationBar.style.display = "none";
    }
}