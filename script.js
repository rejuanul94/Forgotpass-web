document.getElementById('requestReset').addEventListener('click', function() {
    const emailPhone = document.getElementById('emailPhone').value;
    
    if (validateEmailPhone(emailPhone)) {
        alert('A reset link has been sent to your email or phone.');

        // Switch to the new password step
        document.getElementById('step1').style.display = 'none';
        document.getElementById('step2').style.display = 'block';
    } else {
        alert('Please enter a valid phone number or email.');
    }
});

document.getElementById('resetForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (newPassword === confirmPassword && newPassword.length >= 6) {
        alert('Password has been reset successfully.');
        // Redirect to the login page after resetting (replace the link)
        window.location.href = "https://rxyznltech.netlify.app";
    } else {
        alert('Passwords do not match or the password is too short (minimum 6 characters).');
    }
});

function validateEmailPhone(input) {
    const phoneRegex = /^[0-9]{10}$/; // Simple phone validation (10 digits)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email validation

    return phoneRegex.test(input) || emailRegex.test(input);
}
