// login.js

document.addEventListener('DOMContentLoaded', function() {
    const idNumberInput = document.getElementById('id-number');
    const passwordInput = document.getElementById('password');
    const showPasswordCheckbox = document.getElementById('show-password');
    const loginButton = document.getElementById('login-btn');

    // Toggle password visibility
    showPasswordCheckbox.addEventListener('change', function() {
        if (this.checked) {
            passwordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
        }
    });

    // Real-time validation for ID Number (must be 8 digits)
    idNumberInput.addEventListener('input', function() {
        if (idNumberInput.value.length !== 8) {
            idNumberInput.setCustomValidity('ID number must be 8 digits.');
            idNumberInput.reportValidity();
            loginButton.disabled = true;
        } else {
            idNumberInput.setCustomValidity('');
            loginButton.disabled = false;
        }
    });

    // Form submission (optional additional validation before submission)
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function(e) {
        if (passwordInput.value.length < 8) {
            e.preventDefault();
            alert('Password must be at least 8 characters long.');
        }
    });

    // Link to Register Page if user doesn't have an account
    const createAccountLink = document.getElementById('create-account-link');
    createAccountLink.addEventListener('click', function() {
        window.location.href = 'register.html';
    });
});
