setup({},()=>{

obj.clone("box", "div")
obj.addClass("box");
obj.style.color = rgb(255,0,0)
obj.append("box")

forever(()=>{

    obj.style.x = mouse_X
    obj.style.y = mouse_Y
    obj.update("box")
    
})

})
