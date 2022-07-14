
let doc = document

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

            this.color = "#00000000"

            this.height = 100

            this.width = 100

            this.position = "absolute",

            this.borderRadius = "0%"

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

        borderRadius: "0%",

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
     */
    rectangle(){
            let div = document.createElement("div");
            naf.dotNum++
            div.id = naf.dotNum

            div.style.position = pen.style.position
            div.style.backgroundColor = pen.style.color
            div.style.height = pen.style.height+"px"
            div.style.width = pen.style.width+"px"
            div.style.top =  (this.y - (this.style.height/2))+"px"
            div.style.left = (this.x - (this.style.width/2))+"px"
            div.style.borderRadius = this.style.borderRadius
            div.style.transform = "rotate("+ (this.rotation) +"deg)"
            
    
            document.getElementById("pen").appendChild(div);
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
*/

let html = {

    style:{

        backgroundColor: "#ff0000",

    },
    
    make(element){

        

    }
}
