document.getElementById('forgotPasswordForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;

    if (email === '') {
        alert("Email Address cannot be empty.");
        return;
    }

    // Here, you can handle the logic for resetting the password (e.g., sending reset link).
    alert('A password reset link has been sent to ' + email);
});
