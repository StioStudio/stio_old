

setup(()=>{

var gamepads = {};

var gamepad;
var gamepadPos;

window.addEventListener(
    "gamepadconnected",
    function (e) {
        gamepads = navigator.getGamepads();
        gamepadPos = e.gamepad.index;
        gamepad = navigator.getGamepads()[e.gamepad.index];
    },
    false
);


function updateControllers() {
    gamepads = navigator.getGamepads();
    gamepad = navigator.getGamepads()[gamepadPos];
}


function play() {

    gamepad.vibrationActuator.playEffect("dual-rumble", {
        startDelay: 0,
        duration: 500,
        weakMagnitude: .01,
        strongMagnitude: .4
    });

}


addEventListener("gamepadconnected", ()=>{
    
    pen.style.height = 100
    pen.style.width = 100

    setInterval(()=>{
    
    updateControllers()
    
    pen.clear()
    
    pen.style.color = color.rgb(200, 200, 0)
    pen.x = gamepad.axes[0] * 100 + 100
    pen.y = gamepad.axes[1] * 100 + 100
    pen.rectangle()
    
    pen.style.color = color.rgb(0, 200, 200)
    pen.x = gamepad.axes[2] * 100 + 400
    pen.y = gamepad.axes[3] * 100 + 100    
    pen.rectangle()
    
  }, 1);
})





pen.x = 200
pen.y = 200

pen.style.height = 300
pen.style.width = 300
pen.style.color = "#ff0000"
pen.style.borderRadius = "20%"

repeat.forever(()=>{

    pen.clear()

    pen.rotation += 0.4
    pen.move(2)

    pen.rectangle()

})







})
