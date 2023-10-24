<?php
if (isset($_POST['message'])) {
    $message = $_POST['message'];
    $file = 'chat.txt';
    
    if ($replyingTo) {
        $message = $replyingTo . ' ' . $message;
        $replyingTo = null;
    }

    file_put_contents($file, $message . PHP_EOL, FILE_APPEND);
}
?>
