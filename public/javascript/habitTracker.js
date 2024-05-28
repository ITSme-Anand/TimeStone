let menuBtn = document.querySelector(".topMenuBtn");
menuBtn.addEventListener('click',function(event){
    var navigationBar = document.querySelector(".navigation");
    console.log(navigationBar);
    var displayNav = navigationBar.getAttribute("style");
    console.log(displayNav.endsWith("none;"))
    if(displayNav.endsWith("none;")){
        navigationBar.style.display = "block";
    }
    else{
        navigationBar.style.display = "none";
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
                .then(response => console.log(response.data),window.location.reload())
                .catch(error => console.error('Error:', error));
        
    })
}




