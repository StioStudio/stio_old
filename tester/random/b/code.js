
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
            
            pen.id = "none"
            
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
        
        
    },

    id: "none",
    
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
        naf.penNum++
        naf.penId.push(this.style.id)
        div.id = naf.penNum
        
        div.innerText = this.style.text
        div.style.font = this.style.textType
        div.style.fontSize = `${this.style.textSize*SP}px`
        div.style.position = pen.style.position
        div.style.backgroundColor = pen.style.color
        div.style.height = pen.style.height*SP+"px"
        div.style.width = this.style.width*SP+"px"

        div.style.top =  (this.y*SP - (this.style.height*SP / 2 + (this.style.borderSize*SP)))+"px"
        div.style.left = (this.x*SP - (this.style.width*SP / 2 + (this.style.borderSize*SP)))+"px"
        
        div.style.borderRadius = this.style.radius
        div.style.border = `${this.style.borderSize*SP}px solid ${this.style.borderColor}`
        div.style.transform = "rotate("+ (this.rotation) +"deg)"
        
        
        document.getElementById("pen").appendChild(div)
    },
    clear(){
        document.getElementById("pen").innerHTML = ""
        naf.penNum = 0
        naf.penId = []
    }
}

function getPenId(_id){
    
    return(getElementById((naf.penId.indexOf(_id)+1)))
    
}


pen.id = 1
pen.style.borderColor = rgb(255,100,0)
pen.update()


