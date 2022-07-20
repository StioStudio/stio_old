
let doc = document

let nav = navigator

let win = window

/**@default
 * I need help with this
 */
 let help = {
    mouse: "help",
    sprites: "help",
    img: "help",
    sound: "help",
    html: "help",
}

function sec(_num) {

    return(_num * 1000)

}

/** @default
 * You do NOT need this
 * naf = not a function
 */
 let naf = {
    lineNum: 0,
    dotNum: 0,
    store: [],
    storeName: [],
    penready: true,
    makeDivId(_id){
        let div = document.createElement("div")
        div.id = _id
        document.body.appendChild(div)
    },
    
    coseineY: 0,
    coseineX: 0,
    sineX: 0,
    sineY: 0,

    x:0,
    y:0,
    z:0,

    setPoint(_x, _y, _z){
        this.x = _x
        this.y = _y
        this.z = _y
    },

    eventList: [],

    TenToHex(_color) {
        
        let color = mod(_color, 256)

        let rem = "0123456789abcdef"
        return( ( rem[ Math.floor(color / 16) ] ) + ( rem[ Math.floor( mod(color, 16) ) ] ) )
    },

    styleDiv(){



    }



}

function smallestHW(){
    if(win.innerHeight <= win.innerWidth){
        return(win.innerHeight)
    }
    return(win.innerWidth)
}

function percent(a,b){
    return(a/b*100)
}


function makeText(...toText){
    return(`${toText}`)
}

function RunText(...text_to_func){
    return( Function(text_to_func) )
}

let enter = "\n"

/**
 * @default 
 * place all of your code in her
 */
function setup(_text) {

    doc.getElementById("all").style.touchAction = "none"

    naf.makeDivId("pen")
    
    requestAnimationFrame(_text)

}

/** @default
 * console.log("text")
 */
function say(..._text) {
    console.log(..._text)
}

/** @default
 *  repeat{
        for (let i = 0; i < times; i++) {
            text()
        }
    }
 */

let repeat = {
    
    times(times, _text) {
        for (let i = 0; i < times; i++) {
            _text()
        }
    },

    forever(_text){
        let update = () => {
            _text()
            requestAnimationFrame(update)
        }
        requestAnimationFrame(update)
    }
}

let pen = {

    style: {

        reset(){

            this.color = "#ff0000"

            this.height = 100

            this.width = 100

            this.position = "absolute",

            this.radius = "0%"

            this.borderSize = 0
            
            this.borderColor = "#000000"

            this.text = ""

            textType = "none"

            textSize = 50
    
        },

        /** @default
         * you can set the color like this
         * color{
         * "#ff0000" = red
         * hsl(0, 100%, 50%) = red
         * hwb(0 0% 0%) = red
         * rgb(255, 0, 0) = red
         * red = red
         * }
         */
        color: "#00000000",

         /** @default
         * You can change the position type (default is absolute)
         * types of position{
         * absolute
         * fixed
         * relative
         * static
         * sticky
         * }
         */
        position: "absolute",
        
        width: 100,

        height: 100,

        radius: "0%",

        borderSize: 0,

        borderColor: "#000000",

        text: "",

        textType: "none",

        textSize: 50,

    },

    varReset(){

        this.rotation = 0
        this.x = 0
        this.y = 0
        
    },

    rotation: 0,
    x: 0,
    y: 0,
        
    move(move){
        this.x += sin(this.rotation) * move
        this.y += sin(this.rotation - 90) * move
    },

    hide(){
        this.style.color = "#00000000"
        this.style.borderColor = "#00000000"
    },

    /** @default
     * Makes a rectangle on the html/website.
     */
    rectangle(){
        let SP = smallestHW()/1000
        let div = doc.createElement("div");
        naf.dotNum++
        div.id = naf.dotNum

        div.innerText = this.style.text
        div.style.font = this.style.textType
        div.style.fontSize = `${this.style.textSize*SP}px`
        div.style.position = pen.style.position
        div.style.backgroundColor = pen.style.color
        div.style.height = pen.style.height*SP+"px"
        div.style.width = pen.style.width*SP+"px"
        div.style.top =  (this.y*SP - (this.style.height*SP / 2 + this.style.borderSize*SP))+"px"
        div.style.left = (this.x*SP - (this.style.width*SP / 2 + this.style.borderSize*SP))+"px"
        div.style.borderRadius = this.style.radius
        div.style.border = `${this.style.borderSize*SP}px solid ${this.style.borderColor}`
        div.style.transform = "rotate("+ (this.rotation) +"deg)"


        document.getElementById("pen").appendChild(div)
    },
    clear(){
        document.getElementById("pen").innerHTML = ""
        naf.dotNum = 0
    }
}

/** @default
 * Math
 * 
 * findes the cordinate between x1,y1 and x2,y2 wit the percent
 * 
 * lerp{
        let percent = _percent * 2;
        let x =  ((x1 * (2 - percent)) + (x2 * percent)) / 2;
        return ( x );
 }
 */

function lerp(a, b, _percent){

    let percent = _percent * 2;
    let out =  ((a * (2 - percent)) + (b * percent)) / 2;
    
    return ( out );

}

/** @default
 * Math
 * 
 *  cos{
        return(Math.cos(element))
    }
 * */
function cos(element) {
    return(Math.cos(6.28 / 360 * element))
}

/** @default
 * Math
 * 
 *  sin{
        return(Math.sin(element))
    }
 * */
function sin(element) {
    return(Math.sin(6.28 / 360 * element))
}

/** @default
 * Math
 * 
 *  sqrt{
        return(Math.sqrt(element))
    }
 * */
function sqrt(element) {
    return(Math.sqrt(element))
}

/** @default
 * Math
 * 
 *  abs{
        return(Math.abs(element))
    }
 * */
function abs(element) {
    return(Math.abs(element))
}

/** @default
 * Math
 * Gives you a the distance between the cordinates
 * 
 *  distance(x1, y1, x2, y2){
        return( Math.sqrt((x1 - x2)**2 + (y1 - y2)**2) )
    }
 * */
function distance(x1, y1, x2, y2){
    return( Math.sqrt((x1 - x2)**2 + (y1 - y2)**2) )
}

/** @default
 * Math
 * Gives you the direction from x1,y1 to x2,y2
 * 
 *  point(x1, y1, x2, y2){
        return( Math.atan2 (x2 - x1, y2 - y1) * 180 / Math.PI )
    }
 * */
function point(x1, y1, x2, y2){
    return( Math.atan2 (x2 - x1, y2 - y1) * 180 / Math.PI )
}

/** @default
 * Math
 * 
 * gives a nummber betwwen 0 and element
 * you can add desimals by saying true on "desimal"
 */
function random(_element, desimal) {

    let rem = Math.random()*_element

    if (not(desimal)){
        rem = Math.round(rem)
    }

    return ( rem )
}

/** @default
 * Math
 * 
 * true + true = true
 * false + true = false
 * true + false = false
 * false + false = false
 * true = 1
 * false = 0
 */
function and(a,b){
    return(a && b)
}

/** @default
 * Math
 * 
 * true = false
 * false = true
 * true = 1
 * false = 0
 */
function not(a) {
    return(!a)
}

function mod(a, b) {
    return(a % b)
}

function loadImage(url) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.src = url;
    });
}

/*
let img = {
    async save(name, _url){

        naf.storeName.push(name)
        let rem = await loadImage(_url)
        naf.store.push(rem)

    },
    get(name){

        return naf.store[naf.storeName.indexOf(name)]

    }
}
*/

/*
let sound = {
    async save(name, _url){

        naf.storeName.push(name)
        let rem = await loadImage(_url)
        naf.store.push(rem)

    },
    get(name){

        return ( naf.store[naf.storeName.find(name)] )

    }
}
*/

function rgb(red, green, blue){
    return("#" + naf.TenToHex(red) + naf.TenToHex(green) + naf.TenToHex(blue))
}

function rgba(red, green, blue, transparency){
    return("#" + naf.TenToHex(red) + naf.TenToHex(green) + naf.TenToHex(blue) + (naf.TenToHex(255-transparency)))
}

let eventer = {
    listen(_name_, _text){
        let code = {
            _name_,
            _text
        }
        naf.eventList.push(code)
    },
    send(_name, _text, _timeout){


        if (_timeout){

            setTimeout(() => {

                let i = 0

                repeat.times(naf.eventList.length,()=>{

                    if ( naf.eventList[i]._name_ == _name ){
                        naf.eventList[i]._text(_text)
                    }

                    i++
                })

            }, 0);
        }
        else{

            let i = 0

            repeat.times(naf.eventList.length,()=>{

                if ( naf.eventList[i]._name_ == _name ){
                    naf.eventList[i]._text(_text)
                }

                i++
            })

        }

    }
}

/*
let mouse = {

    all: undefined,

    x(item){
        this.all.pageX
    },
    y(item){

    }
}

doc.addEventListener("pointerdown", e => {
    const dot = document.createElement("div")
    dot.classList.add("dot")
    dot.id = e.pointerId
    positionDot(e, dot)
    document.getElementById("mouse").append(dot)
})

doc.addEventListener("pointermove", e => {
    const dot = document.getElementById(e.pointerId)
    if (dot == null) return
    positionDot(e, dot)
})

doc.addEventListener("pointerup", e =>{
    const dot = document.getElementById(e.pointerId)
    if (dot == null) return
    dot.remove()
})

doc.addEventListener("pointercancel", e => {
    const dot = document.getElementById(e.pointerId)
    if (dot == null) return
    dot.remove()
})


function positionDot(e, dot) {
    mouse.all = e
    mouse.x = e.pageX
    mouse.y = e.pageY
    dot.style.position = "fixed"
    dot.style.width = `${e.width * 10}px`
    dot.style.height = `${e.height * 10}px`
    dot.style.left = `${e.pageX + 100}px`
    dot.style.top = `${e.pageY}px`
    dot.style.backgroundColor = "#ff0000"
}

let html = {
    
    style:{
        
        backgroundColor: "#ff0000",
        
    },
    
    make(element){
        
        
        
    }
}
*/

let mouseClick = false
addEventListener("pointerdown", ()=>{
    mouseClick = true
})
addEventListener("pointerup", ()=>{
    mouseClick = false
})

let mouse_X = 0
let mouse_Y = 0

addEventListener("pointermove",(e)=>{
    mouse_X = e.pageX
    mouse_Y = e.pageY
})

Array.prototype.remove = function(_num){
    const array = this.valueOf()
    const index = array.indexOf(_num);
    if (index > -1) {
        array.splice(index, 1);
    }
    return(array)
}

function checkKeys(_key){
    return(keys.includes(_key))
}

let keys = []

addEventListener("keydown", (e)=>{
    if(keys.includes(e.key)) return
    keys.push(e.key)
})

addEventListener("keyup",(e)=>{
    keys.remove(e.key)
})

win.getGamepads = nav.getGamepads()
let con ={
    name: "none",
    active: false,

    cross: 0,
    circle: 0,
    square: 0,
    triangle: 0,

    l1: 0,
    l2: 0,
    l2: 0,

    r1: 0,
    r2: 0,
    r3: 0,

    rX: 0,
    rY: 0,

    lX: 0,
    lY: 0,

    arrow_Up: 0,
    arrow_Down: 0,
    arrow_Left: 0,
    arrow_Rigth: 0,
    
    share: 0,
    options: 0,
    ps: 0,
    touchPad: 0,
}
win.con1 = con
win.con2 = con
win.con3 = con
win.con4 = con
win.cons = {con1,con2,con3,con4}

addEventListener("gamepadconnected", ()=>{ repeat.forever(()=>{

    win.getGamepads = nav.getGamepads()

    function con(conNum) {
        return{

            name: getGamepads[conNum].id,
            active: getGamepads[conNum].connected,

            cross: getGamepads[conNum].buttons[0].value,
            circle: getGamepads[conNum].buttons[1].value,
            square: getGamepads[conNum].buttons[2].value,
            triangle: getGamepads[conNum].buttons[3].value,

            l1: getGamepads[conNum].buttons[4].value,
            l2: getGamepads[conNum].buttons[6].value,
            l3: getGamepads[conNum].buttons[10].value,

            r1: getGamepads[conNum].buttons[5].value,
            r2: getGamepads[conNum].buttons[7].value,
            r3: getGamepads[conNum].buttons[11].value,
            
            rX: getGamepads[conNum].axes[2],
            rY: getGamepads[conNum].axes[3],

            lX: getGamepads[conNum].axes[0],
            lY: getGamepads[conNum].axes[1],

            arrow_Up: getGamepads[conNum].buttons[12].value,
            arrow_Down: getGamepads[conNum].buttons[13].value,
            arrow_Left: getGamepads[conNum].buttons[14].value,
            arrow_Rigth: getGamepads[conNum].buttons[15].value,
            
            share: getGamepads[conNum].buttons[8].value,
            options: getGamepads[conNum].buttons[9].value,
            ps: getGamepads[conNum].buttons[16].value,
            touchPad: getGamepads[conNum].buttons[17].value,
        }
    }

    if (!(undefined == win.getGamepads[0])){
        win.con1 = con(0) 
    }
    if (!(undefined == win.getGamepads[1])){
        win.con2 = con(1) 
    }
    if (!(undefined == win.getGamepads[2])){
        win.con3 = con(2) 
    }
    if (!(undefined == win.getGamepads[3])){
        win.con4 = con(3) 
    }
    win.cons = {con1,con2,con3,con4}
})})

