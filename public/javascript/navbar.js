var logout = document.getElementById('logout');
logout.addEventListener('click', function() {
    axios.post('/logout', {}, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        console.log(response.data);
        console.log('log out successful');
        window.location.href = '/auth/login';
        window.location.reload();
    }).catch(error => {
        console.log(error);
    });
});