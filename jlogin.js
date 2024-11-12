document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Replace these with your actual credentials or validation logic
    const validUsername = 'user';
    const validPassword = 'password';

    if (username === validUsername && password === validPassword) {
        errorMessage.textContent = '';
        alert('Login successful!');
        // Redirect to another page upon successful login
        window.location.href = 'index.html'; // Link to indext.html
    } else {
        errorMessage.textContent = 'Invalid username or password.';
    }
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    const signupErrorMessage = document.getElementById('signup-error-message');

    // Placeholder logic for sign up, replace with your actual logic
    if (newUsername && newPassword) {
        signupErrorMessage.textContent = '';
        alert('Sign up successful!');
        // Redirect to login page upon successful sign up
        window.location.href = 'login.html';
    } else {
        signupErrorMessage.textContent = 'Please fill in all fields.';
    }
});

