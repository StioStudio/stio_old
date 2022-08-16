
obj.save("music", "./../../../setup/lyd/music.wav")
obj.snd.load("music")

obj.save("hello","https://stiostudio.github.io/setup/bilder/Epple.gif");
obj.img.load("hello")

obj.style.color = rgb(255,100,0)
obj.style.id = "bilder"
obj.style.rotation = 100
obj.style.x = 300
obj.style.y = 300
obj.style.width = 300
obj.style.height = 300
obj.style.radius = 100
obj.style.borderSize = 10
obj.style.borderColor = rgb(200,50,0)
obj.update("hello")

obj.append("hello")

let a = true
obj.get("hello").onclick = ()=>{
    if(a){
        a = false
        say("play")
        obj.snd.play("music");
    }else{
        a = true
        say("pause")
        obj.snd.pause("music");
    }
}

forever(()=>{
    obj.style.rotation++
    obj.update("hello")
})
