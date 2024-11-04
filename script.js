// Function to show the popup
function showPopup() {
  document.getElementById('popup').style.display = 'flex';
}

// Function to hide the popup
function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

// Set a timeout to show the popup after 5 seconds
setTimeout(showPopup, 5000); // 5000 milliseconds = 5 seconds

// Close button functionality
document.querySelector('.close-btn').addEventListener('click', closePopup);
