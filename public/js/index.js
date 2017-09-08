var socket = io();

socket.on('connect', function() {
  console.log('connected to server');

  // socket.emit('createEmail', {
  //   to: 'queen@example.com',
  //   text: 'Hey, this is the prince.'
  // });

  // socket.emit('createMessage', {
  //   to: 'The server',
  //   text: 'Hey Server, User here. How are you?'
  // });
});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

// socket.on('newEmail', function(email) {
//   console.log('New Email', email);
// });

socket.on('newMessage', function(message) {
  console.log(('New Message', message));
});
