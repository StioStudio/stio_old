//setup({},()=>{

const socket = io('http://localhost:3000')

socket.on('chat-meassge', data => {
    say(data)
})

//})
