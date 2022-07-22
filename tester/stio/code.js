//var a = "hello"
//window.eval(`
//var ${a} = 7;
//`)
//console.log(hello)

/*

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
/*
let ab1 = true
a1:while (ab1) {
    
    ab1 = false
}

//goStart123
*/
/*
say("hello")

let sound = await loadImage("https://stiostudio.github.io/setup/bilder/Epple.gif")

document.body.appendChild(sound)

say("hi")
*/



/*
let goStart
let goEnd
let goBack

let vari = ()=>{
    say("hello")
    let a = 0
    goStart
    say("hi")
    a++
    if (a==1){
        goBacka1
    }
    goEnd
}

vari = makeText(vari)

say(vari)

vari = vari.replace("goStart",`
let ab1 = true
a1:while (ab1) {`)

vari = vari.replace("goEnd",`ab1 = false
}`)

vari = vari.replace("goBack",`
continue `)

say(vari)
eval(vari)()
*/


setup()

img.save("apple", "https://stiostudio.github.io/setup/bilder/Epple.gif")
forever(()=>{
    pen.clear()
    pen.style.innerHTML = img.get("apple")
    pen.x = 400
    pen.y = 400
    pen.style.height = 200
    pen.style.width = 200
    pen.rotation = 30
    pen.style.borderSize = 10
    pen.style.borderColor = rgb(150, 50, 130)
    pen.style.radius = "20%"
    pen.style.color = rgba(255,170,50,50)
    pen.rectangle()
})
