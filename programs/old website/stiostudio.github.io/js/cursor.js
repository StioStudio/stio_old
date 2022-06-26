
var root = document.querySelector(":cursor")

var MouseX = -100
var MouseY = -100

window.addEventListener("mousemove", e => {
    MouseX = e.clientX - 50;
    MouseY = e.clientY - 50;
})

setInterval(()=> {
    
    root.style.setProperty("--x", (MouseX + "px"));
    root.style.setProperty("--y", (MouseY + "px"));

}, 0);
