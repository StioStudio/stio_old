const io = require('socket.io')(1234)
console.log("Hello, WORLD")

io.on("connection", socket => {
    console.log("new user")
    socket.emit("chat-meassge","Hello World")
})
