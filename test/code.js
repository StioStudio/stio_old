//var a = "hello"
//window.eval(`
//var ${a} = 7;
//`)
//console.log(hello)
setup(()=>{})

let a = 0
let b = 0

pen.style.radius = "30%"
pen.style.borderColor = rgb(0,0,255)
pen.style.borderSize = 5
repeat.forever(()=>{
    pen.clear()
    pen.style.color = rgb(255,0,0)
    pen.x = mouse_X
    pen.y = mouse_Y
    pen.rectangle()

    pen.style.color = rgb(0,255,0)
    a += con1.lX * 5
    b += con1.lY * 5
    pen.x = a
    pen.y = b
    pen.rectangle()

})


