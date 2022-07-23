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


let abc = 0

img.save("apple", "https://stiostudio.github.io/setup/bilder/Epple.gif")
img.save("youtube", "./../../setup/bilder/youtube.png")

forever(()=>{
    pen.clear()
    
    pen.style.reset()
    pen.style.innerHTML = img.get("youtube")
    pen.style.height = 200
    pen.style.width = 200
    pen.rotation = 0
    abc++
    pen.x = mouse_X
    pen.y = mouse_Y
    pen.rectangle()
    
    pen.style.innerHTML = img.get("apple")
    pen.x = 400
    pen.y = 400
    pen.style.height = 200
    pen.style.width = 200
    pen.rotation = 30
    pen.style.borderSize = 10
    pen.style.borderColor = rgb(150, 50, 130)
    pen.style.radius = "20%"
    pen.style.color = rgb(255,170,50,100)
    pen.rectangle()
    
})


if (document.pointerLockElement === getElementById("pen")) {
    console.log('The pointer lock status is now locked');
    // Do something useful in response
  } else {
    console.log('The pointer lock status is now unlocked');
    // Do something useful in response
  }
