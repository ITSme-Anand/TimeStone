const form = document.querySelector('form');
form.addEventListener('submit',(event)=>{
    let userName = document.querySelector("#username");
    let password = document.querySelector("#password");
    let error = false;
    let userNameErrorDiv = document.querySelector("#userNameErrorDiv");
    let passwordErrorDiv = document.querySelector("#passwordErrorDiv");
    if(userName.value===''){
        userNameErrorDiv.innerHTML = '<span class="material-symbols-outlined">warning</span><p>UserName empty!</p>';
        userNameErrorDiv.classList.add("errorDiv");
        error = true;
        event.preventDefault();
    }
    if(!error){
        userNameErrorDiv.innerHTML = '';
        userNameErrorDiv.classList.remove("errorDiv");
    }
    if(password.value===''){
        passwordErrorDiv.innerHTML = '<span class="material-symbols-outlined">warning</span><p>password must not be empty</p>';
        passwordErrorDiv.classList.add('errorDiv')
        error = true;
    }
    if(error){

        event.preventDefault();
        return;
    }
    else{
        localStorage.setItem('username',userName.value);
    }
})