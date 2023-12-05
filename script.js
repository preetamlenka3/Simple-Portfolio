function submitForm() {
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    // Validate input fields
            if (name.trim() === '' || email.trim() === '') {
                alert('Please fill in all mandatory fields.');
                return; // Stop the form submission
            }


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

    // this line work for storing data in client side only
    // // Create a Blob with the JSON data
    // var blob = new Blob([jsonData], { type: 'text/plain;charset=utf-8' });

    // // Save the Blob as a text file using FileSaver.js
    // saveAs(blob, 'formData.txt');

    // Encode the JSON data for URL
    var encodedData = encodeURIComponent(jsonData);

    // Redirect to another page with the data as a URL parameter
    window.location.href = 'https://preetamlenka3.github.io/Simple-Portfolio/Resume.html?data=' + encodedData;
}

function getBrowserDetails() {
    var browserDetails = {
        userAgent: navigator.userAgent,
        appName: navigator.appName,
        appVersion: navigator.appVersion,
        platform: navigator.platform,
        vendor: navigator.vendor,
        language: navigator.language || navigator.userLanguage || 'Unknown',
        isChrome: /Chrome/.test(navigator.userAgent),
        isFirefox: /Firefox/.test(navigator.userAgent),
        isEdge: /Edg/.test(navigator.userAgent),
        isSafari: /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent),
        isIE: /Trident/.test(navigator.userAgent),
        isOpera: /Opera/.test(navigator.userAgent),
    };
    return browserDetails;
}


function getScreenSize() {
    return {
        width: window.screen.width,
        height: window.screen.height,
        pixelRatio: window.devicePixelRatio
    };
}

function getTimeZone() {
    try {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
    } catch (error) {
        console.error('Error getting time zone:', error);
        return 'Unknown';
    }
}

function getLanguage() {
    try {
        return navigator.language || navigator.userLanguage || 'Unknown';
    } catch (error) {
        console.error('Error getting language:', error);
        return 'Unknown';
    }
}
