// Add your JavaScript logic for the Home page here
// Feel free to customize based on your requirements

document.addEventListener('DOMContentLoaded', function () {
    // Replace [username] with the actual username (you can fetch it from your backend)
    const username = 'JohnDoe'; // Replace this with the actual username
    const greeting = document.querySelector('.circle p');
    greeting.textContent = `Hi, ${username}`;

    // Add event listeners for subject icons (you can replace the URLs with actual subject pages)
    const subjectIcons = document.querySelectorAll('.subject-icons a');
    subjectIcons.forEach(icon => {
        icon.addEventListener('click', function (event) {
            event.preventDefault();
            // Replace the URL with the actual subject page
            window.location.href = 'subject.html';
        });
    });

    // Add event listeners for header buttons (Leaderboard and Progress)
    const leaderboardButton = document.querySelector('.button-container button:nth-child(1)');
    const progressButton = document.querySelector('.button-container button:nth-child(2)');

    leaderboardButton.addEventListener('click', function () {
        // Replace the URL with the actual leaderboard page
        window.location.href = 'leaderboard.html';
    });

    progressButton.addEventListener('click', function () {
        // Replace the URL with the actual progress page
        window.location.href = 'progress.html';
    });
});
