// Function to handle button click events
function handleClick(unit, chapter) {
    console.log(`Clicked on Unit ${unit}, Chapter ${chapter}`);
    // You can add logic here to perform actions based on the clicked unit and chapter
}

// Attach click event listeners to each button
document.querySelectorAll('.chapter-button').forEach(button => {
    button.addEventListener('click', function() {
        // Extract unit and chapter numbers from button id
        const [unit, chapter] = button.id.split('-');
        // Call handleClick function with unit and chapter numbers
        handleClick(unit, chapter);
    });
});