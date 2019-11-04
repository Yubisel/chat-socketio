$(function(){
    const socket = io();
    const $messageForm = $('#message-form');
    const $chat = $('#chat');
    const $message = $('#message');

    //events
    $messageForm.submit(function(e){
        e.preventDefault();
        socket.emit('send message', $message.val());
        $message.val('').focus();
    });

    socket.on('new message', function(data){
        $chat.append(data + '<br>');
    });
});