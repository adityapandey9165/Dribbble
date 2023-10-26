// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Get the video element
  var video = document.getElementById("myVideo");

  // Function to play or pause the video
  function togglePlay() {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }

  // Add an event listener to toggle play/pause when the video container is clicked
  var videoContainer = document.querySelector(".video-container");
  videoContainer.addEventListener("click", togglePlay);
});

window.addEventListener("scroll", function () {
  const toolbar = document.querySelector(".toolbar");
  const footer = document.querySelector("footer");
  const toolbarBottom = toolbar.getBoundingClientRect().bottom;
  const footerTop = footer.getBoundingClientRect().top;

  if (toolbarBottom > footerTop) {
    toolbar.style.position = "absolute";
    toolbar.style.top = footerTop - toolbar.offsetHeight + "px";
  } else {
    toolbar.style.position = "fixed";
    toolbar.style.top = "40px";
  }
});
// Popups
function openPopup() {
  document.getElementById("myPopup").style.display = "block";
}

function closePopup() {
  document.getElementById("myPopup").style.display = "none";
}

const buttons = document.querySelectorAll(".popup-button input");

buttons.forEach((button) => {
  button.addEventListener("change", function () {
    buttons.forEach((otherButton) => {
      if (otherButton !== button) {
        otherButton.checked = false;
      }
    });
  });
});

function continueButtonClicked() {
  // Get references to the input fields
  const descriptionInput = document.getElementById("description");
  const priceInMindInput = document.getElementById("price-in-mind");

  // Check if any of the input fields are empty
  if (
    descriptionInput.value.trim() === "" ||
    priceInMindInput.value.trim() === ""
  ) {
    // Display an error message or take appropriate action
    alert("Please fill in all required fields.");
  } else {
    // All input fields are filled, you can continue with your logic here
    // Close the popup
    closePopup();
  }
}

// Function to open the error popup
function openErrorPopup() {
  document.getElementById("errorPopup").style.display = "block";
}
// JavaScript to open the error popup when the button is clicked
const showErrorButton = document.getElementById("showErrorButton");
showErrorButton.addEventListener("click", openErrorPopup);

// Function to close the error popup
function closeErrorPopup() {
  document.getElementById("errorPopup").style.display = "none";
}

// Event listener for the "Close" button
const closeErrorButton = document.getElementById("closeErrorPopup");
closeErrorButton.addEventListener("click", closeErrorPopup);
