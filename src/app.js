const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const path = require('path');
const loguer = require('morgan');

const app = express();

//settings
app.set('port', process.env.PORT || 3000);

app.use(loguer('dev'));

//static files
app.use(express.static(path.join(__dirname, 'public')));
const server = http.createServer(app);
const io = socketio.listen(server);

require('./sockets')(io);

//starting the server
server.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});