// Select the form
const form = document.querySelector('form');

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