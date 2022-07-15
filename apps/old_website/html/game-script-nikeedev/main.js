import { Playlib } from './playlib/bin/playlib.js'

console.log("%cNo coping right? 🤨", "color:red; font-size:40px; font-family: 'Magneto';");

document.title = "Game 🕹📺"


const canvas = document.getElementById("canvas");


canvas.width = window.innerWidth - 25;
canvas.height = window.innerHeight - 15;
var ScreenSize = new Playlib.Size(canvas.width, canvas.height);

var config = {
    game_name: "Example 1",
    style: "border: 1px solid black; background-color: white;",
    width: ScreenSize.width,
    height: ScreenSize.height,
    useOwnCanvas: true,
    canvas: canvas,
}

var game = new Playlib.Game(config);

function updateScreen(){
    canvas.width = window.innerWidth - 25;
    canvas.height = window.innerHeight - 15;
    ScreenSize = new Playlib.Size(canvas.width, canvas.height);
}

function innScreen(){

    if ((player.position.x) > (ScreenSize.width - player.image.width/2)){
        player.position.x = ScreenSize.width - player.image.width/2
    }

    if ((player.position.y) > (ScreenSize.height - player.image.height/2)){
        player.position.y = ScreenSize.height - player.image.height/2
    }

    if ((player.position.x) < ( -player.image.width/2)){
        player.position.x = -player.image.width/2
    }

    if ((player.position.y) < ( -player.image.width/2)){
        player.position.y = -player.image.width/2
    }

}


var player = new Playlib.Sprite("../../bilder/epple2.png", new Playlib.Vector2(0, 0), ScreenSize);

await player.init();


function setPlayerX(sposx){
    player.position.x = sposx
}

function setPlayerY(sposy){
    player.position.y = sposy
}

function changePlayerx(cposx){
    player.position.x += cposx
}

function changePlayerY(cposy){
    player.position.y += cposy
}

function goto(gposx, gposy){
    player.position.x = gposx
    player.position.y = gposy
}

setPlayerX((innerWidth / 2) - (player.image.width/2))
setPlayerY((innerHeight / 2) - (player.image.height/2))

game.update((ctx) => {

    

    updateScreen()

    if (Playlib.Event.KeyPressed(Playlib.Keys.ArrowRight)) {
        changePlayerx(5)
    }
    if (Playlib.Event.KeyPressed(Playlib.Keys.ArrowLeft)) {
        changePlayerx(-5)
    }
    if (Playlib.Event.KeyPressed(Playlib.Keys.ArrowDown)) {
        changePlayerY(5)
    }
    if (Playlib.Event.KeyPressed(Playlib.Keys.ArrowUp)) {
        changePlayerY(-5)
    }

    innScreen()

    if (Playlib.Event.KeyPressed(82)) {
        canvas.requestFullscreen()
    }
    
    player.draw(ctx)

}, true)

