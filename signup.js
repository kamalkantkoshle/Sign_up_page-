document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Fetch form input values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validate password match
    if (password !== confirmPassword) {
        document.getElementById('signup-feedback').innerText = 'Passwords do not match. Please try again.';
    } else {
        // Simulate signup process (replace with actual API call or backend validation)
        setTimeout(() => {
            document.getElementById('signup-feedback').innerText = `Sign up successful! Welcome, ${username}!`;
        }, 1000);
    }
});
