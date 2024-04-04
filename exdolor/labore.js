// Check if the element exists before using it
const closeButton = document.getElementById('close-modal');
if (closeButton) {
  closeButton.addEventListener('click', function() {
    // Code to close the modal
  });
} else {
  console.error("The element with ID 'close-modal' does not exist.");
}

// Alternatively, if multiple modals need to be closed and they share a common class, you could use event delegation:
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('modal-close-button')) {
    // Code to close the modal
  }
});
