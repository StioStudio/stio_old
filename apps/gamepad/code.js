setup({touchAction:false})
say("Made with " + "%c\u2764", "color:#fc4444; font-family: ; font-size: 25px;", "by nikeedev and stio_studio!");

let leftStick_X = 330
let rigthStick_X = 680


//                   Created  by
//
//    Nikee                              Stio
//
//    ███╗░░██╗                         ░██████╗
//    ████╗░██║      ▄▀█ █▄░█ █▀▄     ██╔════╝
//    ██╔██╗██║      █▀█ █░▀█ █▄▀     ╚█████╗░
//    ██║╚████║                         ░╚═══██╗
//    ██║░╚███║                         ██████╔╝
//    ╚═╝░░╚══╝                         ╚═════╝░
//



pen.style.reset()
pen.style.textSize = 40
pen.style.width = 400
pen.style.height = 200
pen.x = 500
pen.y = 400
pen.style.color = rgb(100, 200, 0)
pen.style.radius = "50%"
pen.style.text = `
pls click a button on your controler
`;


pen.rectangle()

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

function makeTextGamepad(){
    
    //left under stick
    pen.style.reset()
    pen.x = con.lX*100+leftStick_X
    pen.y = 600
    pen.style.height = 10
    pen.style.width = 10
    pen.style.radius = "50%"
    pen.style.color = rgb(0,0,0)
    pen.rectangle()
    
    pen.style.reset()
    pen.style.hide()
    pen.style.height = 0
    pen.style.width = 0
    pen.x = leftStick_X-100
    pen.y = 650
    pen.style.textSize = 20
    pen.style.text = round(con.lX*1000000)/1000000
    pen.rectangle()
    
    pen.y = 680
    pen.style.text = "con.lX"
    pen.rectangle()
    
    //left side stick
    pen.style.reset()
    pen.x = leftStick_X-200
    pen.y = con.lY*100+400
    pen.style.height = 10
    pen.style.width = 10
    pen.style.radius = "50%"
    pen.style.color = rgb(0,0,0)
    pen.rectangle()
    
    pen.style.reset()
    pen.style.hide()
    pen.style.height = 0
    pen.style.width = 0
    pen.x = leftStick_X-300
    pen.y = 400
    pen.style.textSize = 20
    pen.style.text = round(con.lY*1000000)/1000000
    pen.rectangle()
    
    pen.y = 430
    pen.style.text = "con.lY"
    pen.rectangle()
    
    
    //rigth under stick
    pen.style.reset()
    pen.x = con.rX*100+rigthStick_X
    pen.y = 600
    pen.style.height = 10
    pen.style.width = 10
    pen.style.radius = "50%"
    pen.style.color = rgb(0,0,0)
    pen.rectangle()

    pen.style.reset()
    pen.style.hide()
    pen.style.height = 0
    pen.style.width = 0
    pen.x = rigthStick_X-100
    pen.y = 650
    pen.style.textSize = 20
    pen.style.text = round(con.rX*1000000)/1000000
    pen.rectangle()
    
    pen.y = 680
    pen.style.text = "con.rX"
    pen.rectangle()
    
    
    //rigth side stick
    pen.style.reset()
    pen.x = rigthStick_X+200
    pen.y = con.rY*100+400
    pen.style.height = 10
    pen.style.width = 10
    pen.style.radius = "50%"
    pen.style.color = rgb(0,0,0)
    pen.rectangle()

    pen.style.reset()
    pen.style.hide()
    pen.style.height = 0
    pen.style.width = 0
    pen.x = rigthStick_X+230
    pen.y = 400
    pen.style.textSize = 20
    pen.style.text = round(con.rY*1000000)/1000000
    pen.rectangle()

    
    pen.y = 430
    pen.style.text = "con.rY"
    pen.rectangle()
}

function makeRigthStick(){
    pen.style.reset()
    pen.style.height = 90
    pen.style.width = 90
    pen.style.radius = "50%"
    pen.style.borderColor = rgb()
    pen.style.borderSize = 6
    // If you click on R3, the joystick color gets darkened
    if (con.r3) {
        pen.style.color = rgb(0, 120, 120)
    }
    else {
        pen.style.color = rgb(0, 200, 200)
    }
    // pen.style.color = color.rgb(0, 200, 200)
    pen.x = con.rX * 100 + rigthStick_X;
    pen.y = con.rY * 100 + 400;
    
    pen.rectangle()
        
    pen.style.reset()
    pen.style.hide()
    pen.style.height = 50
    pen.style.width = 50
    pen.style.textSize = 40
    pen.style.text = "R3"
    pen.rectangle()
}

function makeLeftStick(){
    pen.style.reset()
    pen.style.height = 90
    pen.style.width = 90
    pen.style.radius = "50%"
    pen.style.borderSize = 6
    pen.style.borderColor = rgb(0, 0, 0)
    
    // If you click on L3, the joy stick color gets darkened
    if (con.l3) {
        pen.style.color = rgb(120, 120, 0)
    }
    else {
        pen.style.color = rgb(200, 200, 0)
    }
    // pen.style.color = color.rgb(200, 200, 0)
    pen.x = con.lX * 100 + leftStick_X;
    pen.y = con.lY * 100 + 400;
    pen.rectangle()
        
    pen.style.reset()
    pen.style.hide()
    pen.style.height = 50
    pen.style.width = 50
    pen.style.textSize = 40
    pen.style.text = "L3"
    pen.rectangle()
    
}


var gamepads = {};
var gamepad;
var gamepadPos;

function updateControllers() {
    gamepads = navigator.getGamepads();
    gamepad = navigator.getGamepads()[0];
}

window.addEventListener("gamepadconnected",
function (e) {
    gamepads = navigator.getGamepads();
    gamepadPos = e.gamepad.index;
    gamepad = navigator.getGamepads()[e.gamepad.index];
},false);


addEventListener("gamepadconnected", () => {
    forever(()=>{

        //updateControllers()

        pen.clear()


        //rigth stick        
        pen.style.reset()
        pen.style.color = rgb(200, 255, 255)
        pen.x = rigthStick_X
        pen.y = 400
        pen.style.radius = "41%"
        pen.style.height = 300
        pen.style.width = 300
        pen.style.borderSize = 10
        pen.rectangle()

        //left stick
        pen.style.reset()
        pen.style.color = rgb(255, 255, 200)
        pen.x = leftStick_X
        pen.y = 400
        pen.style.radius = "41%"
        pen.style.height = 300
        pen.style.width = 300
        pen.style.borderSize = 10
        pen.rectangle()

        makeRigthStick()
        makeLeftStick()

        makeTextGamepad()


        playVbrtion.onclick = function() {

            updateControllers()

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
durationTime.placeholder = "Duration ( 0.0 <-> 5.0 secs )"


btns.appendChild(weakMagnitudeInput);
btns.appendChild(strongMagnitudeInput);
btns.appendChild(durationTime);

document.body.appendChild(btns);
