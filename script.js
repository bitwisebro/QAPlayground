function showConfirmation(event) {
    event.preventDefault(); // Prevents the default form submission

    // Get user's name from the form
    var userName = document.getElementById("name").value;

    // Display a confirmation popup
    alert("Thank you, " + userName + "! Your ticket has been successfully submitted.");

    // Reset the form fields
    reset();
}

function reset(){
    // Reset the form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.querySelector('input[name="gender"]:checked').checked = false;
    document.getElementById("subject").value = "general";
    document.getElementById("message").value = "";
    document.getElementById("acceptTerms").checked = false;
}
