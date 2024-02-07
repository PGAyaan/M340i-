<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/login.css"> <!-- Adjusted the path -->
    <script defer src="js/login.js"></script> <!-- Adjusted the path -->
    <title>MCQ Whizz - Login</title>
</head>

<body>
    <header>
        <div class="logo-container">
            <img src="website\images\Beta_logo.png" alt="MCQ Whizz Logo" id="logo"> <!-- Updated image path -->
        </div>
        <div class="button-container">
            <button class="header-button" onclick="animateButton(this)">Login</button>
            <button class="header-button" onclick="animateButton(this)">Sign up</button>
        </div>
    </header>
    <section class="login-container">
        <div class="form-container">
            <h2>Login to MCQ Whizz</h2>
            <div class="form-group">
                <input type="text" id="usernameOrEmail" placeholder="Username or Email">
            </div>
            <div class="form-group">
                <input type="password" id="password" placeholder="Password">
            </div>
            <button onclick="login()">Login</button>
            <p class="signup-link">Don't have an account? <a href="website/templates/signup.php">Sign Up</a></p> <!-- Updated signup.php path -->
        </div>
    </section>
    <script src="website/js/login.js"></script> <!-- Updated JS path -->
</body>

</html>