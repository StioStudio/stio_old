setup({},() => {
sleep(0.5)



function make3dObject(x, y, z, rotation_X=0, rotation_Y=0, rotation_Z=0, sizeX=100, sizeY=100, color = "#ff0000"){
    let div = doc.createElement("div")
    let ds = div.style
    ds.height = "1px"
    ds.width = "1px"
    ds.backgroundColor = color
    ds.transform = `translate3d(${x}px, ${y}px, 0px) rotateX(${rotation_Y}deg) rotateY(${rotation_X}deg) rotateZ(${rotation_Z}deg) scale3d(${sizeX / (z/100)}, ${sizeY / (z/100)}, 1)`
    document.getElementById("pen").appendChild(div)
}

let a = 0
forever(()=>{
    a++
    pen.clear()
    make3dObject(300, 300, 300, a, 110, 0, 200, 200, "#ff0000")
    make3dObject(300, 200, 300, a, 20, 0, 200, 200, "#00ff00")
})


})
