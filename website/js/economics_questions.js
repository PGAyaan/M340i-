// Add this content to economics_questions.js
function loadChapter(chapterNumber) {
    // Update the selected chapter text
    document.getElementById('selected-chapter').innerText = `Chapter ${chapterNumber}`;

    // You can add logic here to dynamically load questions for the selected chapter
    // For simplicity, let's just display a placeholder message
    document.getElementById('questions-container').innerHTML = `<p>No questions available for Chapter ${chapterNumber}.</p>`;
}

function animateButton(button) {
    // Add animation logic if needed
    console.log(`Button ${button.innerText} clicked!`);
}