const express = require('express');
const app = express();


const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.origins(['https://joln17.me:443']);

io.on('connection', socket => {
    console.info("User connected");

    socket.on('chat message', message => {
        io.emit('chat message', message);
    });
});

server.listen(8300);
