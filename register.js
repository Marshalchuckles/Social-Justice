document.getElementById("registrationForm").addEventListener("submit", function(event) {
    // Get values from the form fields
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const idNumber = document.getElementById("idNumber").value;
    const email = document.getElementById("email").value;
    const contact = document.getElementById("contact").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const termsAccepted = document.getElementById("terms").checked;

    // Regular expression to match only letters
    const lettersOnlyPattern = /^[A-Za-z]+$/;

    // Validate first name and last name
    if (!lettersOnlyPattern.test(firstName) || !lettersOnlyPattern.test(lastName)) {
        alert("First Name and Last Name can only contain letters.");
        event.preventDefault(); // Prevent form submission
        return; // Exit the function
    }

    // Validate ID Number (8 digits)
    if (!/^\d{8}$/.test(idNumber)) {
        alert("ID Number must be exactly 8 digits.");
        event.preventDefault();
        return;
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
        return;
    }

    // Validate Contact (phone number format, e.g., length check)
    if (!/^\d{10}$/.test(contact)) {
        alert("Contact number must be exactly 10 digits.");
        event.preventDefault();
        return;
    }

    // Validate password length
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        event.preventDefault();
        return;
    }

    // Validate password confirmation
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        event.preventDefault();
        return;
    }

    // Validate terms acceptance
    if (!termsAccepted) {
        alert("You must accept the Terms and Conditions.");
        event.preventDefault();
        return;
    }

    // If all validations pass, the form will submit successfully
});
