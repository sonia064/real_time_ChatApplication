<?php
if (file_exists('chat.txt')) {
    $lines = file('chat.txt');
    foreach ($lines as $line) {
        if (strpos($line, 'REPLY:') === 0) {
            echo '<div class="message reply-message"><div class="message-text">' . substr($line, 7) . '</div> <button class="reply-button">Reply</button></div>';
        } else {
            echo '<div class="message"><div class="message-text">' . $line . '</div> <button class="reply-button">Reply</button></div>';
        }
    }
}
?>
