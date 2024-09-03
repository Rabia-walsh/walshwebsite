<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];

    $to = "rabiasaqib1211@gmail.com"; // Replace with your email address
    $subject = "New Newsletter Subscription";
    $message = "A new user has subscribed with the email: " . $email;
    $headers = "From: no-reply@yourdomain.com" . "\r\n" .
               "Reply-To: no-reply@yourdomain.com" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        echo "Subscription successful.";
    } else {
        echo "Error sending email.";
    }
}
?>
