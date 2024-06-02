
let menuBtn = document.querySelector(".topMenuBtn");
const form = document.querySelector('form');
var habitinputerror = document.getElementById('Habitinputerror');
var startTimeerror = document.getElementById('startTimeerror');
var endTimeerror = document.getElementById('endTimeerror');
var days = document.querySelectorAll('input[type=checkbox]');
var dayerror = document.getElementById('dayserror');

form.addEventListener('submit', (e) => {
    
    habitinputerror.innerText = '';
    startTimeerror.innerText = '';
    endTimeerror.innerText = '';
    const habitName = form.habitName.value;
    const startTime = form.startTime.value;
    const endTime = form.endTime.value;
    var atLeastOneChecked = false;
    for(let i of days){
        if(i.checked){
            atLeastOneChecked = true;
            break;
        }
    }
    if(habitName === ''){
        e.preventDefault();
        habitinputerror.innerText = 'Habit name is required';
        habitinputerror.style.color = 'red';
    }
    if(startTime === ''){
        e.preventDefault();
        startTimeerror.innerText = 'start time is required';
        startTimeerror.style.color = 'red';
    }
    if(endTime === ''){
        e.preventDefault();
        endTimeerror.innerText = 'end time is required';
        endTimeerror.style.color = 'red';
    }
    if(!atLeastOneChecked){
        e.preventDefault();
        dayerror.innerText = 'At least one day must be selected';
        dayerror.style.color = 'red';
    }
});


menuBtn.addEventListener('click',function(event){
    var navigationBar = document.querySelector(".navigation");
    let HabitTrackerDiv = document.querySelector(".HabitTrackerDiv");
    let mainSection = document.querySelector(".mainSection");
    let featureBar = document.querySelector(".habitFeatures");
    console.log(navigationBar);
    var displayNav = navigationBar.getAttribute("style");
    console.log(displayNav.endsWith("none;"))
    if(displayNav.endsWith("none;")){
        navigationBar.style.display = "block";
        HabitTrackerDiv.style.width = '100%';
        mainSection.style.gridTemplateColumns = "20% 48% 32%";
        featureBar.style.alignItems = "center";
        
    }
    else{
        navigationBar.style.display = "none";
        HabitTrackerDiv.style.width = '100%';
        mainSection.style.gridTemplateColumns = "0% 62% 38%";
        featureBar.style.alignItems = "center";
    }
})



let habitAddButton = document.querySelector('.habitAddButton');
let HabitPopUp = document.querySelector('.HabitPopUp');

habitAddButton.onclick = ()=>{
    console.log("button clicked");
    habitAddButton.style.display = "none";
    HabitPopUp.style.display = "flex";
    Savebtn = document.querySelector(".HabitSaver");
    Savebtn.onclick = ()=>{
        habitAddButton.style.display = "none";
        HabitPopUp.style.display = "flex";
    };
};

let HabitDoneButtons = document.getElementsByClassName('habitDoneButton');
for(var i=0;i<HabitDoneButtons.length;i++){
    HabitDoneButtons[i].addEventListener('click',function(event){
        let habitNameId = this.getAttribute('id');
        let l =habitNameId.split('-')
        let day = l[1];
        let habitName = l[0];
        let status = l[2]
        console.log(habitName)
        console.log(day);
        axios.post('http://localhost:3000/UpdateHabit', {
                    "habitName": habitName,
                    "day": day
                })
                .then(
                    response => console.log(response.data),
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000)
                )
                .catch(error => console.error('Error:', error));
        
    })
}




