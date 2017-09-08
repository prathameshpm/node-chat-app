const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
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

  // socket.emit('newMessage', {
  //   from: 'Admin',
  //   text: 'Welcome to the chat app',
  //   createdAt: new Date().getTime()
  // });

  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New User joined'));

  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
    io.emit('newMessage', generateMessage(message.from, message.text));

    // socket.broadcast.emit('newMessage', {
    //   from: message.from,
    //   text: message.text,
    //   createdAt: new Date().getTime()
    // });
  });

  socket.on('disconnect', () => {
    console.log('User Disconnected');
  });
});


server.listen(port, () => {
  console.log(`App server started on port: ${port}`);
});
