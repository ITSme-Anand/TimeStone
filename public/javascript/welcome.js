let loginBtn = document.querySelector(".Login-Button");
loginBtn.addEventListener('click',(event)=>{
    window.location.href = 'auth/login';
})

let RegisterBtn = document.querySelector(".Register-Button");
RegisterBtn.addEventListener('click',(event)=>{
    window.location.href = 'auth/register';
})

let GetStartedBtn = document.querySelector(".getStartedButton");
GetStartedBtn.addEventListener('click',(event)=>{
    window.location.href = 'auth/register';
})