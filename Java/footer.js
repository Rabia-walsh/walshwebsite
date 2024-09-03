document.getElementById('subscription-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var email = document.querySelector('#subscription-form input[name="email"]').value;

    // Prepare the data to send to the server
    var formData = new FormData();
    formData.append('email', email);

    // Send the data to the server
    fetch('../Java/footer.php', {  // Make sure this path is correct according to your file structure
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert('Subscription successful for ' + email);
        document.getElementById('subscription-form').reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error with your subscription. Please try again.');
    });
});
