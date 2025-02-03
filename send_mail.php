<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = isset($_POST['name']) ? htmlspecialchars(trim($_POST['name'])) : '';
    $phone = isset($_POST['phone']) ? htmlspecialchars(trim($_POST['phone'])) : '';
    $date = isset($_POST['date']) ? htmlspecialchars(trim($_POST['date'])) : '';

    if (empty($name) || empty($phone)) {
        echo json_encode(["status" => "error", "message" => "Name and phone are required fields."]);
        exit;
    }

    $to = "6logan7@gmail.com"; // Укажите вашу почту
    $subject = "New Contact Request";

    $message = "<html><body>";
    $message .= "<h2>New Contact Request</h2>";
    $message .= "<p><strong>Name:</strong> $name</p>";
    $message .= "<p><strong>Phone:</strong> $phone</p>";
    $message .= "<p><strong>Preferred Time:</strong> $date</p>";
    $message .= "</body></html>";

    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: no-reply@yourdomain.com" . "\r\n"; // Укажите свой домен

    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(["status" => "success", "message" => "Message sent successfully!"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Error sending message."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
}
?>