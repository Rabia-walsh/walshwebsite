document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const formData = {
        firstName: document.getElementById('first-name').value,
        lastName: document.getElementById('last-name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };

    // Send email using EmailJS
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
    .then(function(response) {
        alert("Email sent successfully!");
        document.getElementById('contact-form').reset(); // Clear form
    }, function(error) {
        alert("Failed to send email. Please try again later.");
    });
});
