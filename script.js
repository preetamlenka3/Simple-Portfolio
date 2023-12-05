function submitForm() {
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    // Validate input fields
    if (name.trim() === '' || email.trim() === '') {
        alert('Please fill in all mandatory fields.');
        return; // Stop the form submission
    }

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
    window.location.href = 'https://preetamlenka3.github.io/Simple-Portfolio/Resume.html';
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
