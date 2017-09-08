const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New User connected');

  // socket.emit('newEmail', {
  //   from: 'king@example.com',
  //   text: 'Hey, how are you?',
  //   createdAt: 999
  // });
  //
  // socket.on('createEmail', (newEmail) => {
  //   console.log('createEmail', newEmail);
  // });

  // socket.emit('newMessage', {
  //   from: 'The server',
  //   text: 'Hello User',
  //   createdAt: 666
  // });

  socket.on('createMessage', (newMessage) => {
    console.log('createMessage', newMessage);
    io.emit('newMessage', {
      from: newMessage.from,
      text: newMessage.text,
      createdAt: new Date().getTime()
    });
  });

  socket.on('disconnect', () => {
    console.log('User Disconnected');
  });
});


server.listen(port, () => {
  console.log(`App server started on port: ${port}`);
});
