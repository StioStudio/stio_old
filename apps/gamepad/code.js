setup(()=>{})

say("Made with " + "%c\u2764", "color:#fc4444; font-family: ; font-size: 25px;", "by nikeedev and stio_studio!");

function updateControllers() {
    gamepads = navigator.getGamepads();
    gamepad = navigator.getGamepads()[gamepadPos];
}


// Setup funksjonen bryter et par ting for oss:
// 1. Vi kan ikke få tilgang til variablene som inneholder kontroller data, og då kan vi ikke heller kjøre vibration.
// 
// Grunn: Funksjoner som endrer på variabler eller lager nye, er bare tilgjenlige inni funksjonen, det betyr at eksisterende variabler får ikke oppdatering (at vi f.eks setter gamepad variablen til kontrolleren din inni setup, skjer det ikke utenfor), 
//
// -og det stopper muligheten til å gjøre ting vi vil, som vibration, og jeg har ikke funnet en god grunn hvifor det skjer, men det fungerer greit utenfor funksjonen. 
//
//  Om du bestemmer deg om å ta vekk setup funksjonen og gjør sånt at koden fungerer overalt, så takker jeg deg.
//
//                      
//                      
//  Nikita : 2022         
//                    |-\       |-|             
//                    | |\      | |
//                    | | \     | |     
//                    | |  \    | |   
//                    | |   \   | |
//                    | |    \  | |
//                    |_|     \_|_|
//


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
    pen.style.borderRadius = "50%"
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
    pen.y += 0
    pen.x -= 0
    pen.rectangle()
    
    pen.style.reset()
    pen.style.width = 10
    pen.style.height = 150
    pen.style.color = rgb(0,0,0)
    pen.y -= 0
    pen.x += 0
    pen.rectangle()
}

function makeLeftStick(){
    pen.style.height = 100
    pen.style.width = 100
    pen.style.borderRadius = "50%"
    
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
    pen.y += 0
    pen.x -= 0
    pen.rectangle()
    
    pen.style.reset()
    pen.style.width = 10
    pen.style.height = 150
    pen.style.color = rgb(0,0,0)
    pen.y -= 0
    pen.x += 0
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
pen.style.color = rgb(250, 250, 0)
pen.x = 900
pen.y = 400
pen.style.borderRadius = "50%"
pen.rectangle()

makeRigthStick()
makeLeftStick()


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

    playVbrtion.onclick = function() {

        gamepad.vibrationActuator.playEffect("dual-rumble", {
            startDelay: 0,
            duration: parseFloat(durationTime.value),
            weakMagnitude: parseFloat(weakMagnitudeInput.value),
            strongMagnitude: parseFloat(strongMagnitudeInput.value)
        });

    };
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
