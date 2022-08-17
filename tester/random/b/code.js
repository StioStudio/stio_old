
let sound = LoadSound("./../../../setup/lyd/music.wav")

let update = ()=>{
    sound.controls = true
    sound.loop = true
    appendChild(sound)
    sound.play()
}
requestAnimationFrame(update)
