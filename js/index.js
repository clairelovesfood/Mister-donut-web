// Gallery

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

}

// web
function checkMail(event) {
  event.preventDefault(); // Prevent form submission

  const mailField = document.getElementById("mailField");
  const thankYouMessage2 = document.getElementById("thankYouMessage2");
  const submitButton = document.querySelector(".newsletter_button-2"); // Select the submit button
  const mailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email validation pattern

  if (!mailFormat.test(mailField.value)) {
    alert("Enter a VALID EMAIL address!");
  } else {
    // Show thank-you message and hide the button/input
    thankYouMessage2.style.display = "block"; // Show the thank-you message
      tryAgainLink2.style.display = "block";
  }
}

document.getElementById("tryAgainLink2").addEventListener("click", (event) => {
  event.preventDefault(); // Prevent page from scrolling or refreshing



  // Hide thank-you message
  const thankYouMessage2 = document.getElementById("thankYouMessage2");
  thankYouMessage2.style.display = "none";

const tryAgainLink2 = document.getElementById("tryAgainLink2");
tryAgainLink2.style.display = "none";

  // Show email input field and button again
  const mailField = document.getElementById("mailField");
  const submitButton = document.querySelector(".newsletter_button-2");

  mailField.style.display = "block"; // Show the email input field
  submitButton.style.display = "inline-block"; // Show the submit button
  thankYouMessage2.style.display = "none";


  // Focus back on the email input field
  mailField.focus();
});


function checkEmail(event) {
  event.preventDefault(); // Prevent form submission

  const emailField = document.getElementById("emailField");
  const thankYouMessage = document.getElementById("thankYouMessage");
  const submitButton = document.querySelector(".newsletter_button"); // Select the submit button
  const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email validation pattern

  if (!emailFormat.test(emailField.value)) {
    alert("Enter a VALID EMAIL address!");
  } else {
    // Show thank-you message and hide the button/input
    thankYouMessage.style.display = "block"; // Show the thank-you message
      tryAgainLink.style.display = "block";
  }
}

document.getElementById("tryAgainLink").addEventListener("click", (event) => {
  event.preventDefault(); // Prevent page from scrolling or refreshing



  // Hide thank-you message
  const thankYouMessage = document.getElementById("thankYouMessage");
  thankYouMessage.style.display = "none";

const tryAgainLink = document.getElementById("tryAgainLink");
tryAgainLink.style.display = "none";

  // Show email input field and button again
  const emailField = document.getElementById("emailField");
  const submitButton = document.querySelector(".newsletter_button");

  emailField.style.display = "block"; // Show the email input field
  submitButton.style.display = "inline-block"; // Show the submit button
  thankYouMessage.style.display = "none";


  // Focus back on the email input field
  mailField.focus();
});



// mobile
// function checkEmail(event) {
//   // Prevent the form from reloading or scrolling the page
//   event.preventDefault();

//   // Get the email field value and define a basic email format to check
//   const emailField = document.getElementById("emailField");
//   const thankYouMessage = document.getElementById("thankYouMessage");
//    const tryAgainLink = document.getElementById("tryAgainLink");
//      const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   // Verify the email matches the format; if not, prompt for a valid email
//   if (!emailFormat.test(emailField.value)) {
//     alert("Enter a VALID EMAIL address!");
//   } else {
//     // Show the thank-you message and clear the input field
//     const thankYouMessage = document.getElementById("thankYouMessage");
//     thankYouMessage.style.display = "block"; // Display thank-you message
//     tryAgainLink.style.display = "none"; // Hide the link after clicking
//     emailField.value = ""; // Clear the input field

//   }
// }

// // Event listener for "Try Again" link
// document.getElementById("tryAgainLink").addEventListener("click", (event) => {
//   event.preventDefault(); // Prevent default link behavior
//   const thankYouMessage = document.getElementById("thankYouMessage");
//   const tryAgainLink = document.getElementById("tryAgainLink");

//   // Hide thank-you message and Try Again link
//   thankYouMessage.style.display = "none";
//   tryAgainLink.style.display = "none"; // Hide the link after clicking

//   // Focus back on the email input
//   document.getElementById("mailField").focus();
// });







// Attach the toggle function to the button
document.querySelector(".livechat_btn").addEventListener("click", (event) => {
  event.preventDefault();
  toggleLiveChat();
});



// ORDER BTN
  function handleOrder() {
    alert("Order Received");
  }

// for web
function toggleLiveChat2() {
  let chatBox2 = document.querySelector(".livechat_box2");

  // Check if the chat box element exists
  if (!chatBox2) {
    chatBox2 = document.createElement("div");
    chatBox2.className = "livechat_box2";
    chatBox2.innerHTML = `
      <h4>Live Chat</h4>
      <div class="chat_content">
        <p>Welcome! How can we help you today?</p>
      </div>
      <button class="close_chat" onclick="toggleLiveChat2()">Close Chat</button>
    `;
    document.body.appendChild(chatBox2);
  }

  // Toggle chat box visibility
  chatBox2.style.display = chatBox2.style.display === "none" ? "block" : "none";
}


// change the colors

document.querySelector(".livechat_btn-web").addEventListener("click", (event) => {
    event.preventDefault();
    const button = event.target;
    if (button.style.backgroundColor === "rgb(102, 102, 102)") {
        button.style.backgroundColor = ""; // Reset to default
        button.style.color = ""; // Reset text color
    } else {
        button.style.backgroundColor = "#666";
        button.style.color = "white";
    }
});