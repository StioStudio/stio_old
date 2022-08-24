setup({},()=>{

obj.clone("box", "div")
obj.addClass("box");
obj.style.color = rgb(255,0,0)
obj.style.radius = 50
obj.style.height = 100
obj.style.width = 300
obj.style.x = 500
obj.style.y = 500
obj.update("box")

obj.append("box")

obj.get("box").onclick = ()=>{
    
    say("hi")

}

})
