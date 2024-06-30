document.addEventListener("DOMContentLoaded", () => {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const submitButton = document.getElementById("submitButton");
  const errorMessage = document.getElementById("errorMessage"); // Assuming you have an element with ID "errorMessage" for the message

  submitButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const username = usernameInput.value.trim(); // Get and trim username input
    const password = passwordInput.value.trim(); // Get and trim password input

    // Clear any existing error message
    errorMessage.textContent = ""; // Set the content to an empty string

    // Validation
    if (username !== "virus" || password !== "100") {
      errorMessage.textContent = "!!INVALID LOGIN!!";
      errorMessage.style.fontWeight = "bold";
      errorMessage.style.color = "black"; // Set the error message text color to red

      // Optional: Add a class for styling the error message container (if applicable)
      // errorMessage.classList.add("error");
    } else {
      // Redirect to sidebar.html on successful validation
      window.location.href = "sidebar.html";
    }
  });
});
