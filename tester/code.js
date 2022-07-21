//var a = "hello"
//window.eval(`
//var ${a} = 7;
//`)
//console.log(hello)

/*
setup(()=>{})

let x1 = 0
let y1 = 0
let x2 = 0
let y2 = 0


pen.style.radius = "30%"
pen.style.borderColor = rgb(255,255,255)
pen.style.borderSize = 5
repeat.forever(()=>{
    pen.clear()
    pen.style.color = rgb(255,0,0)
    pen.x = mouse_X
    pen.y = mouse_Y
    pen.rectangle()

    if(con1.active){
        pen.style.color = rgb(0,0,255)
        x1 += con1.lX * 5
        y1 += con1.lY * 5
        pen.x = x1
        pen.y = y1
        pen.rectangle()
    }
    if(con2.active){
        pen.style.color = rgb(0,255,0)
        x2 += con2.lX * 5
        y2 += con2.lY * 5
        pen.x = x2
        pen.y = y2
        pen.rectangle()
    }

})
*/

setup({})

eventer.listen("psButton",(e)=>{
    say(e)
})
