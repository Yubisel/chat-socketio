module.exports = function(io) {
    io.on('connection', socket => {
        console.log('new connection');

        socket.on('send message', function(data){
            io.sockets.emit('new message', data);
        });
    });
};