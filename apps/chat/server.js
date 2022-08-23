const io = require('socket.io')(3000)
console.log("Hello, WORLD")

io.on("connection", socket => {
    socket.emit("chat-meassge","Hello World")
})
