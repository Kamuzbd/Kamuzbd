// script.js

document.getElementById('loginButton').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === '' || password === '') {
        alert('Please enter both email and password');
    } else {
        alert(`Email: ${email}\nPassword: ${password}`);
    }
});

document.getElementById('createAccountButton').addEventListener('click', function() {
    alert('Redirecting to create new account page...');
});
