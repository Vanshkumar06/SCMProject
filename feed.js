// Handle the form submission
document.getElementById('Feedback').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the usual way
    
    // Show the pop-up
    document.getElementById('thankYouPopup').style.display = 'flex';
});
// 
// Close the pop-up when the "Close" button is clicked
function closePopup() {
    document.getElementById('thankYouPopup').style.display = 'none';
}
