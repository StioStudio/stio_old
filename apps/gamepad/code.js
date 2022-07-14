naf.makeDivId('pen')
say("Made with " + "%c\u2764", "color:#fc4444; font-family: ; font-size: 25px;", "by nikeedev and stio_studio!");

//                   Created  by
//
//    Nikee                              Stio
//
//    ███╗░░██╗                         ░██████╗
//    ████╗░██║      ▄▀█ █▄░█ █▀▄       ██╔════╝
//    ██╔██╗██║      █▀█ █░▀█ █▄▀       ╚█████╗░
//    ██║╚████║                         ░╚═══██╗
//    ██║░╚███║                         ██████╔╝
//    ╚═╝░░╚══╝                         ╚═════╝░
//


function updateControllers() {
    gamepads = navigator.getGamepads();
    gamepad = navigator.getGamepads()[gamepadPos];
}



/*
function playVibration() {

    gamepad.vibrationActuator.playEffect("dual-rumble", {
        startDelay: 0,
        duration: parseFloat(durationTime.value),
        weakMagnitude: parseFloat(weakMagnitudeInput.value),
        strongMagnitude: parseFloat(strongMagnitudeInput.value)
    });
}
*/

function makeRigthStick(){
    pen.style.height = 100
    pen.style.width = 100
    pen.style.Radius = "50%"
    // If you click on R3, the joystick color gets darkened
    if (gamepad.buttons[11].pressed) {
        pen.style.color = rgb(0, 120, 120)
    }
    else {
        pen.style.color = rgb(0, 200, 200)
    }
    // pen.style.color = color.rgb(0, 200, 200)
    pen.x = gamepad.axes[2] * 100 + 900;
    pen.y = gamepad.axes[3] * 100 + 400;
   
    pen.rectangle()
    //resets(makes them to defoult) all styles on pen
    pen.style.reset()
    pen.style.height = 10
    pen.style.width = 150
    pen.style.color = rgb(0,0,0)
    pen.x = gamepad.axes[2] * 100 + 925
    pen.y = gamepad.axes[3] * 100 + 400
    pen.rectangle()
    
    pen.style.reset()
    pen.style.width = 10
    pen.style.height = 150
    pen.style.color = rgb(0,0,0)
    pen.x = gamepad.axes[2] * 100 + 900
    pen.y = gamepad.axes[3] * 100 + 375
    pen.rectangle()
}

function makeLeftStick(){
    pen.style.height = 100
    pen.style.width = 100
    pen.style.Radius = "50%"
    
    // If you click on L3, the joy stick color gets darkened
    if (gamepad.buttons[10].pressed) {
        pen.style.color = rgb(120, 120, 0)
    }
    else {
        pen.style.color = rgb(200, 200, 0)
    }
    // pen.style.color = color.rgb(200, 200, 0)
    pen.x = gamepad.axes[0] * 100 + 500;
    pen.y = gamepad.axes[1] * 100 + 400;
    pen.rectangle()
    
    //resets(makes them to defoult) all styles on pen
    pen.style.reset()
    pen.style.height = 10
    pen.style.width = 150
    pen.style.color = rgb(0,0,0)
    pen.x = gamepad.axes[0] * 100 + 475
    pen.y = gamepad.axes[1] * 100 + 400
    pen.rectangle()
    
    pen.style.reset()
    pen.style.width = 10
    pen.style.height = 150
    pen.style.color = rgb(0,0,0)
    pen.x = gamepad.axes[0] * 100 + 500
    pen.y = gamepad.axes[1] * 100 + 375
    pen.rectangle()
}

    
var gamepads = {};
var gamepad;
var gamepadPos;

window.addEventListener("gamepadconnected",
    function (e) {
        gamepads = navigator.getGamepads();
        gamepadPos = e.gamepad.index;
        gamepad = navigator.getGamepads()[e.gamepad.index];
    },
    false
);



addEventListener("gamepadconnected", () => {
    repeat.forever(()=>{


        updateControllers()

        pen.clear()

        pen.style.reset()
        pen.style.color = rgb(200, 255, 255)
        pen.x = 890
        pen.y = 390
        pen.style.Radius = "41%"
        pen.style.height = 300
        pen.style.width = 300
        pen.style.borderSize = 10
        pen.rectangle()

        pen.style.reset()
        pen.style.color = rgb(255, 255, 200)
        pen.x = 490
        pen.y = 390
        pen.style.Radius = "41%"
        pen.style.height = 300
        pen.style.width = 300
        pen.style.borderSize = 10
        pen.rectangle()

        pen.style.reset()
        makeRigthStick()
        makeLeftStick()



        playVbrtion.onclick = function() {

            gamepad.vibrationActuator.playEffect("dual-rumble", {
                startDelay: 0,
                duration: durationTime.value*1000,
                weakMagnitude: weakMagnitudeInput.value,
                strongMagnitude: strongMagnitudeInput.value
            });
        };



    })
});

/*
setInterval(()=>{

    say(gamepad)
    
}, 1000)
*/

var btns = document.createElement("div");
var playVbrtion = document.createElement("button");

btns.id = "btns";

playVbrtion.innerText = "Play Vibration"


btns.appendChild(playVbrtion);


var weakMagnitudeInput = document.createElement("input");
weakMagnitudeInput.placeholder = "Weak Magnitude ( 0.0 <-> 1.0 )"

var strongMagnitudeInput = document.createElement("input");
strongMagnitudeInput.placeholder = "Strong Magnitude ( 0.0 <-> 1.0 )"

var durationTime = document.createElement("input");
durationTime.placeholder = "Duration ( secs )"


btns.appendChild(weakMagnitudeInput);
btns.appendChild(strongMagnitudeInput);
btns.appendChild(durationTime);

document.body.appendChild(btns);
