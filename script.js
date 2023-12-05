function submitForm() {
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    // Create an object with form data
    var formData = {
        name: name,
        email: email
    };

    // Convert form data to JSON
    var jsonData = JSON.stringify(formData);

    // Save the JSON data in local storage
    localStorage.setItem('formData', jsonData);

    // Redirect to another page
    window.location.href = 'Resume.html';
}
