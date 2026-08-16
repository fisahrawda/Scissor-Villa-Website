// This finds the booking form in index.html.
const bookingForm = document.querySelector("#booking-form");
const formMessage = document.querySelector("#form-message");

// This runs when the visitor clicks the form button.
bookingForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Stops the page from refreshing.

  const name = bookingForm.elements.name.value;
  formMessage.textContent = `Thanks, ${name}! This is a demo, so no appointment was sent.`;
  bookingForm.reset(); // Clears the form after the message appears.
});
