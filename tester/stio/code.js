setup({
pause_button:true
},()=>{

say(document.styleSheets.item(0).cssRules.item(0).cssText = "* { -webkit-user-drag: none; }")

obj.clone("box", "div")
obj.addClass("box");
obj.id = "box";
obj.style.color = rgb(255,0,0)
obj.style.radius = 30
obj.style.height = 60
obj.style.width = 200
obj.style.x = 500
obj.style.y = 400
obj.update("box")

obj.append("box")

obj.get("box").onclick = ()=>{
    
    say("hi")

}

})
