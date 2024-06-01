// Select the form
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.querySelector('#username');
    const password = document.querySelector('#password');
    const cpassword = document.querySelector("#cpassword");
    let usernameError = document.querySelector("#userNameErrorDiv");
    let passwordError = document.querySelector("#passwordErrorDiv");
    let cpasswordError = document.querySelector("#confirmPasswordErrorDiv");
    let error = false;
    let psemptyerror = false;
    let pslessError = false;
    let psnotmatchError = false;

    if (username.value === '') {
        usernameError.innerHTML = '<span class="material-symbols-outlined">warning</span><p>UserName empty!</p>';
        usernameError.classList.add("errorDiv");
        error = true;
    }
    if(!error){
        usernameError.innerHTML = '';
        usernameError.classList.remove("errorDiv");
    }
    if (password.value === '') {
        passwordError.innerHTML = '<span class="material-symbols-outlined">warning</span><p>password empty!</p>';
        passwordError.classList.add("errorDiv");
        error = true;
        psemptyerror = true;
    } 
    if(!psemptyerror){
        passwordError.innerHTML='';
        passwordError.classList.remove("errorDiv");
    }
    if ((password.value.length < 8) && (!psemptyerror)) {
        passwordError.innerHTML = '<span class="material-symbols-outlined">warning</span><p>password less than 8 characters!</p>';
        passwordError.classList.add("errorDiv");
        error = true;
        pslessError = true;
    }
    if((!pslessError)&&(!psemptyerror)){
        passwordError.innerHTML='';
        passwordError.classList.remove("errorDiv");
    }

    if (password.value != cpassword.value) {
        cpasswordError.innerHTML = '<span class="material-symbols-outlined">warning</span><p>both passwords do not match</p>';
        cpasswordError.classList.add("errorDiv");
        error = true;
        psnotmatchError = true;
    }
    if(!psnotmatchError){
        cpasswordError.innerHTML = '';
        cpasswordError.classList.remove("errorDiv");
    }

    if (error) {
        event.preventDefault();
    }
    else{
        this.submit();
    }
});

