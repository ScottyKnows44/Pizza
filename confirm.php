<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <pre>
        <?php
        var_dump($_POST);

        $fname = $_POST['firstName'];
        $lname = $_POST['lastName'];
        $address = $_POST['address'];
        $method = $_POST['method'];
        $toppings = $_POST['toppings'];
        $toppingString = implode(", ", $toppings);

        echo "<h1>Thank you for your order, $fname!</h1>";
        echo "<h2>Order Summary</h2>";
        echo "<p>Name: $fname $lname</p>";
        echo"<p>Toppings: $toppingString</p>";


        //SEND EMAIL
        $fromAddress = "poppa@gmail.com";
        $toAddress = "tostrander@greenriver.edu";
        $subject = "Order Confirmation";
        $headers = "From: Poppa's Pizza <$fromAddress>";
        $message = "Your order has been confirmed\r\n";
        $message .= "Name: $fname $lname\r\n";

        mail($toAddress, $subject, $message, $headers);


        ?>
    </pre>


</body>
</html>