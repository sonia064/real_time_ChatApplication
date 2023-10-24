$(document).ready(function() {
    function getMessages() {
        $.ajax({
            url: 'get.php',
            type: 'GET',
            success: function(data) {
                $('#chat-box').html(data);
            }
        });
    }

    getMessages();

    $('#send').click(function() {
        var message = $('#message').val();
        if (message != '') {
            $.ajax({
                url: 'send.php',
                type: 'POST',
                data: { message: message },
                success: function() {
                    getMessages();
                    $('#message').val('');
                }
            });
        }
    });

    var replyingTo = null;

    // Reply to a message
    $(document).on('click', '.reply-button', function() {
        var originalMessage = $(this).siblings('.message-text').text();
        replyingTo = 'REPLY: ' + originalMessage;
        $('#message').attr('placeholder', 'Replying to: ' + originalMessage);
    });

    // Cancel the reply
    $(document).on('click', '#cancel-reply', function() {
        replyingTo = null;
        $('#message').attr('placeholder', 'Type your message');
    });

    // new messages every 2 seconds
    setInterval(function() {
        getMessages();
    }, 2000);
});
