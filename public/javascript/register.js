// Select the form
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.querySelector('#username');
    const password = document.querySelector('#password');
    let error = false;

    if (username.value === '') {
        showError(username, 'Username is required');
        error = true;
    }

    if (password.value === '') {
        showError(password, 'Password is required');
        error = true;
    } else if (password.value.length < 8) {
        showError(password, 'Password must be at least 8 characters');
        error = true;
    }

    if (!error) {
        this.submit();
    }
});

function showError(input, message) {
    const errorElement = document.createElement('div');
    errorElement.style.color = 'red';
    errorElement.textContent = message;
    input.parentNode.insertBefore(errorElement, input.nextSibling);
}
// Add an event listener for form submission
form.addEventListener('submit', function(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Select the username and password fields
    const username = document.querySelector('#username');
    const password = document.querySelector('#password');

    // Validate the username and password
    if (username.value === '' || password.value === '') {
        alert('Both fields are required!');
        return;
    }

    // If validation passes, submit the form
    this.submit();
});