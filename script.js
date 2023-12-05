function submitForm() {
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    // Get browser details
    var browserDetails = getBrowserDetails();

    // Get user location (This might require additional permissions and could be asynchronous)
    // For simplicity, this example uses a placeholder for location.
    var userLocation = "Unknown";

    // Create an object with form data, browser details, and location
    var formData = {
        name: name,
        email: email,
        browser: browserDetails,
        location: userLocation
    };

    // Convert form data to JSON
    var jsonData = JSON.stringify(formData);

    // Encode the JSON data for URL
    var encodedData = encodeURIComponent(jsonData);

    // Redirect to another page with the data as a URL parameter
    window.location.href = 'https://preetamlenka3.github.io/Simple-Portfolio/Resume.html?data=' + encodedData;
}

function getBrowserDetails() {
    var ua = navigator.userAgent;
    var browserDetails = {
        userAgent: ua,
        isChrome: /Chrome/.test(ua),
        isFirefox: /Firefox/.test(ua),
        isEdge: /Edg/.test(ua),
        isSafari: /Safari/.test(ua) && !/Chrome/.test(ua),
        isIE: /Trident/.test(ua),
    };
    return browserDetails;
}
