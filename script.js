function showConfirmation(event) {
    event.preventDefault(); // Prevents the default form submission

    // Get user's name from the form
    var userName = document.getElementById("name").value;

    // Display a confirmation popup
    alert("Thank you, " + userName + "! Your ticket has been successfully submitted.");
}
