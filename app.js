const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

const currentPlayers = [];


app.use(express.static('public'));

io.on('connection', (socket) => {
  socket.emit('your-id', socket.id);

  socket.on('game-started', (arg) => {
    currentPlayers.push({ id : socket.id, data : null });


    socket.on('player-data-out', (arg) => {
      currentPlayers.forEach((player, i) => {
        if (player.id == socket.id) {
          currentPlayers[i].data = arg;
        }
      });
    })

    setInterval(() => {
      currentPlayers.forEach((player, i) => {
        if (player.id == socket.id) {
          socket.broadcast.emit('player-data-in', currentPlayers[i]);
        }
      });
    }, 0);

    socket.on('disconnect', () => {
      currentPlayers.forEach((player, i) => {
        if (player.id == socket.id) {
          currentPlayers.splice(i, 1);
        }
      });
    })
  });



});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
