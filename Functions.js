
let doc = document

let nav = navigator

let win = window

let nothing = ""

let enter = `
`
let space = " "

/**@default
 * I need help with this
 */
let help = {
    img: "help",
    sound: "help",
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
        document.getElementById("all").appendChild(div)
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



    },

    psButton:false,
    psButton1:false,
    psButton2:false,
    psButton3:false,
    psButton4:false,

    imgName:[],
    imgSaves:[],
    soundName:[],
    soundSaves:[],

    penId:[],

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

function makeFunc(...toFunc){
    return( Function(toFunc) )
}

function getElementById(_id) {
    return(doc.getElementById(_id))
}

/**
 * @default 
 * place all of your code in her
 */
function setup({
    divPen = true,
    touchAction = true,
    pointer = false,
    autoCSS = "none",
    goToLine = false,
} = {},_func = ()=>{}) {
    
    if(autoCSS == "purple") {
        getElementById("all").style.backgroundColor = rgb(138,60,138)
        getElementById("all").style.color = rgb(255,255,255)
    }
    if(autoCSS == "darkMode") {
        getElementById("all").style.backgroundColor = rgb(0,0,0)
        getElementById("all").style.color = rgb(255,255,255)
    }

    if(!(pointer == false)){
        getElementById("all").style.cursor = pointer
    }

    if(!touchAction){
        getElementById("all").style.touchAction = "none"
    }
        
    if(divPen){
        naf.makeDivId("pen")
    }
    

    if(goToLine){
        requestAnimationFrame(makeGotoLine(_func))
    }
    else{
        requestAnimationFrame(_func)
    }    
}

function makeGotoLine(_func){
    let func = String(_func)
while (func.includes("goStart")) {
    let rem = ""
    let rem_goStart = func.indexOf("goStart")
    let conter = rem_goStart + 8
    
    while (!(func[conter] == ")")) {
        
        rem += func[conter]
        conter++
    }    
    
    
    func = func.replace(`goStart(${rem})`,`
    let ${rem}a = true
    ${rem}:while (${rem}a) {`)
}
while (func.includes("goEnd")) {
    let rem = ""
    let rem_goStart = func.indexOf("goEnd")
    let conter = rem_goStart + 6
    
    while (!(func[conter] == ")")) {
        
        rem += func[conter]
        conter++
    }    
    
    func = func.replace(`goEnd(${rem})`,`${rem}a = false
    }`)
}
while (func.includes("goBack")) {
    let rem = ""
    let rem_goStart = func.indexOf("goBack")
    let conter = rem_goStart + 7
    
    while (!(func[conter] == ")")) {
        
        rem += func[conter]
        conter++
    }    
    
    func = func.replace(`goBack(${rem})`,`continue ${rem}`)
}
return (eval(func))
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
function forever(_func){
    let update = () => {
        _func()
        requestAnimationFrame(update)
    }
    requestAnimationFrame(update)
}

function repeat(times, _func) {
    for (let i = 0; i < times; i++) {
        _func()
    }
}

let pen = {
    
    style: { 
        hide(){
            this.color = rgb(255, 255, 255,255);
            this.borderSize = 0
            this.borderColor = rgb(255, 255, 255, 255);
        },
        reset(){

            this.color = "#ff0000"

            this.height = 100

            this.width = 100

            this.position = "absolute",

            this.radius = "0%"

            this.borderSize = 0
            
            this.borderColor = "#000000"

            this.text = ""

            this.textType = "none"

            this.textSize = 50

            this.innerHTML = doc.createElement("div")

            this.id = "none"
    
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

        innerHTML: doc.createElement("div"),

        id: "none",

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


    /** @default
     * Makes a rectangle on the html/website.
     * You can style the rectangle with pen.style."name on style"
     */
    rectangle(){
        let SP = smallestHW()/1000
        let div = this.style.innerHTML.cloneNode(true)
        naf.dotNum++
        naf.penId.push(this.style.id)
        div.id = naf.dotNum

        div.innerText = this.style.text
        div.style.font = this.style.textType
        div.style.fontSize = `${this.style.textSize*SP}px`
        div.style.position = pen.style.position
        div.style.backgroundColor = pen.style.color
        div.style.height = pen.style.height*SP+"px"
        div.style.width = pen.style.width*SP+"px"
        div.style.top =  (this.y*SP - (this.style.height*SP / 2 + (this.style.borderSize*SP)))+"px"
        div.style.left = (this.x*SP - (this.style.width*SP / 2 + (this.style.borderSize*SP)))+"px"
        div.style.borderRadius = this.style.radius
        div.style.border = `${this.style.borderSize*SP}px solid ${this.style.borderColor}`
        div.style.transform = "rotate("+ (this.rotation) +"deg)"


        document.getElementById("pen").appendChild(div)
    },
    clear(){
        document.getElementById("pen").innerHTML = ""
        naf.dotNum = 0
        naf.penId = []
    }
}

function getPenId(_id){

    return(getElementById((naf.penId.indexOf(_id)+1)))

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


function round(_num, amount=1){
    let a = 10**amount
    return(Math.round(_num*a)/a)
}

function floor(_num, amount=1){
    let a = 10**amount
    return(Math.floor(_num*a)/a)
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
    return( sqrt((x1 - x2)**2 + (y1 - y2)**2) )
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

function LoadImage(url) {
    let img;
    new Promise((resolve) => {
        img = new Image();
        img.onload = () => resolve(img);
        img.src = url;
    });
    return img;
}


//////////////////////////////////////
// Sound
//////////////
document.cookie = "promo_shown=1; Max-Age=2600000; Secure"

function LoadSound(url) {
    var snd = new Audio();
    new Promise((resolve, reject) => {
        snd.preload = "auto";                      // intend to play through
        snd.autoplay = false;                       // autoplay when loaded
        snd.onerror = reject;                      // on error, reject
        snd.onended = resolve;                     // when done, resolve
        snd.loop = false;

        snd.src = url;       
    });
    return snd;
}

//////////////////////////////////////


let img = {
    save(_imgName, _imgUrl){
       naf.imgName.push(_imgName)
       naf.imgSaves.push(LoadImage(_imgUrl)) 
    },
    get(_imgName){
        if(naf.imgName.includes(_imgName)){
            return(naf.imgSaves[naf.imgName.indexOf(_imgName)])
        }
        return(doc.createElement("img"))
    }
}

let sound = {
    save(_soundName, _soundUrl){
       naf.soundName.push(_soundName)
       naf.soundSaves.push(LoadSound(_soundUrl)) 
    },
    get(_soundName){
        return(naf.soundSaves[naf.soundName.indexOf(_soundName)])
    },

    play(_soundName, {loop = false} = {})
    {
        var snd = sound.get(_soundName);
        snd.loop = loop != null ? loop : false;
        snd.play()
    },

    pause(_soundName)
    {
        sound.get(_soundName).pause()
    },

}

function rgb(red=0, green=0, blue=0, transparency = 0){
    return("#" + naf.TenToHex(red) + naf.TenToHex(green) + naf.TenToHex(blue) + (naf.TenToHex(255-transparency)))
}

function createElement(_element){
    return(doc.createElement(_element))
}
function appendChild(_element){
    doc.getElementById("all").appendChild(_element)
}

let eventer = {
    listen(_name_, _func){
        let code = {
            _name_,
            _text: _func
        }
        naf.eventList.push(code)
    },
    send(_name, _var){
        let i = 0

        repeat(naf.eventList.length,()=>{

            if ( naf.eventList[i]._name_ == _name ){
                naf.eventList[i]._text(_var)
            }

            i++
        })
    }
}

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
    let array = this.valueOf()
    let index = array.indexOf(_num);
    if (index > -1) {
        array.splice(index, 1);
    }
    return(array)
}

String.prototype.remove = function(_text){
    return(this.valueOf().replace(_text,""))
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
    player: undefined,
    
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
    arrow_Right: 0,
    
    share: 0,
    options: 0,
    ps: 0,
    touchPad: 0,
}
let conPrimary = 0
win.con1 = con
win.con2 = con
win.con3 = con
win.con4 = con
win.cons = {con1,con2,con3,con4}

addEventListener("gamepadconnected", ()=>{
    win.getGamepads = nav.getGamepads()
    if (!(undefined == win.getGamepads[3])){
        conPrimary = 3
    }
    if (!(undefined == win.getGamepads[2])){
        conPrimary = 2
    }
    if (!(undefined == win.getGamepads[1])){
        conPrimary = 1 
    }
    if (!(undefined == win.getGamepads[0])){
        conPrimary = 0
    }
    forever(()=>{
    
    win.getGamepads = nav.getGamepads()

    function conF(conNum) {
        return{
            
            name: getGamepads[conNum].id,
            active: getGamepads[conNum].connected,
            player: conNum,

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
            arrow_Right: getGamepads[conNum].buttons[15].value,
            
            share: getGamepads[conNum].buttons[8].value,
            options: getGamepads[conNum].buttons[9].value,
            ps: getGamepads[conNum].buttons[16].value,
            touchPad: getGamepads[conNum].buttons[17].value,
        }
    }

    if (!(undefined == win.getGamepads[0])){
        win.con1 = conF(0) 
    }
    if (!(undefined == win.getGamepads[1])){
        win.con2 = conF(1) 
    }
    if (!(undefined == win.getGamepads[2])){
        win.con3 = conF(2) 
    }
    if (!(undefined == win.getGamepads[3])){
        win.con4 = conF(3) 
    }
    win.cons = {con1,con2,con3,con4}
    con = conF(conPrimary)
})
forever(()=>{
    if(and((con1.ps||con2.ps||con3.ps||con4.ps),(!(naf.psButton)))){
        naf.psButton = true
        if(con1.ps){
            eventer.send("psDown", 1)
            naf.psButton1 = true
        }
        if(con2.ps){
            eventer.send("psDown", 2)
            naf.psButton2 = true
        }
        if(con3.ps){
            eventer.send("psDown", 3)
            naf.psButton3 = true
        }
        if(con4.ps){
            eventer.send("psDown", 4)
            naf.psButton4 = true
        }
    }
    if(and(!(con1.ps||con2.ps||con3.ps||con4.ps),((naf.psButton)))){
        naf.psButton = false
        if(naf.psButton1){
            eventer.send("psUp", 1)
            naf.psButton1 = false
        }
        if(naf.psButton2){
            eventer.send("psUp", 2)
            naf.psButton2 = false
        }
        if(naf.psButton3){
            eventer.send("psUp", 3)
            naf.psButton3 = false
        }
        if(naf.psButton4){
            eventer.send("psUp", 4)
            naf.psButton4 = false
        }
    }
    if((con1.ps||con2.ps||con3.ps||con4.ps)){
        if(con1.ps)eventer.send("psPress", 1)
        if(con2.ps)eventer.send("psPress", 2)
        if(con3.ps)eventer.send("psPress", 3)
        if(con4.ps)eventer.send("psPress", 4)
    }
})
eventer.listen("psDown",()=>{

})
})


