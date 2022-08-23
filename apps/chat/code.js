//setup({},()=>{

const socket = io('http://localhost:1234')

socket.on('chat-meassge', data => {
    console.log(data)
})

//})
