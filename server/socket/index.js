const mediasoupServer = require('./mediasoup-server');

function socketMain(io) {
    io.on('connection', (socket) => {
        console.log('New user online');
        console.log("connect client by Socket.io");
        socket.on("first Request", req => {
          console.log(req);
          socket.emit("first Respond", { data: "firstRespond" });
        });
        socket.on('disconnect', () => {
            console.log('User offline');
        });
    });
    mediasoupServer(io);
}
module.exports = socketMain;
