import io from 'socket.io-client';

const socket = io('ws://localhost:3000');

socket.on('eventClient', (data) => {
  console.log(data);
});

socket.on('bitcoinPrice', (data) => {
  console.log(data);
});

socket.emit('join', '123');
