function login() {
    var usernameOrEmail = document.getElementById('usernameOrEmail').value;
    var password = document.getElementById('password').value;

    // Placeholder for login logic
    console.log('Username or Email:', usernameOrEmail);
    console.log('Password:', password);
}

function animateButton(button) {
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 300);
}

function redirectToLogin() {
    // Placeholder for redirection logic
    console.log('Redirecting') }