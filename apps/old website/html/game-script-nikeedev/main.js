import { Sprite, Input, Keys, Vector2, Size } from './GameEngine_js/GameEngine.js'

console.log("%cNo coping right? 🤨", "color:red; font-size:40px; font-family: 'Magneto';");

document.title = "Game 🕹📺"


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 25;
canvas.height = window.innerHeight - 15;
var ScreenSize = new Size(canvas.width, canvas.height);

function updateScreen(){
    canvas.width = window.innerWidth - 25;
    canvas.height = window.innerHeight - 15;
    ScreenSize = new Size(canvas.width, canvas.height);
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


var player = new Sprite("../../../bilder/epple2.png", new Vector2(0, 0), ScreenSize);

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

player.update(ctx, () => {

    updateScreen()
    
    if (Input.GetKeyDown(Keys.ArrowRight)) {
        changePlayerx(5)
    }
    if (Input.GetKeyDown(Keys.ArrowLeft)) {
        changePlayerx(-5)
    }
    if (Input.GetKeyDown(Keys.ArrowDown)) {
        changePlayerY(5)
    }
    if (Input.GetKeyDown(Keys.ArrowUp)) {
        changePlayerY(-5)
    }

    innScreen()

    if (Input.GetKeyDown(82)) {
        canvas.requestFullscreen()
    }
    

}, true)

