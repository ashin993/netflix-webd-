// Get the "Sign in" button element by its ID
var signinButton = document.getElementById("submit");

// Add a click event listener to the button
signinButton.addEventListener("click", function() {
    // Get the email and password input values
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;

    // Check if both email and password fields are filled
    if (email.trim() === "" || password.trim() === "") {
        // Display an alert if either field is empty
        alert("Please fill in both email and password fields.");
    } else {
        // Display a success alert if both fields are filled
        alert("Sign in successful!\nEmail: " + email + "\nPassword: " + password);
    }
});

