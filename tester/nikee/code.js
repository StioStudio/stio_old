var image_data = [[], []];

function setup_test({divPen = true, touchAction = false} = {}, /*Images*/Images = [[]], /*Audios*/Audios = [], _func = () => {})
{
    if (!Images.length == 0) {
        for (let i = 0; i < Images.length; i++) {
            
            say(Images[i][0]);
            image_data[0].push(Images[i][0]);
            
            say(Images[i][1]);
            loadImage(Images[i][1]).then(img => image_data[1].push(img));
        
        }
    }

    if(!touchAction){
        doc.getElementById("all").style.touchAction = "none"
    }
        
    if(divPen){
        naf.makeDivId("pen")
    }
    
    requestAnimationFrame(_func)

    console.log(image_data)
}


function get_image(name)
{
    return image_data[1][image_data[0].indexOf(name)]
}


setup_test({divPen: false, touchAction: false}, [
    ["img1", "./../../setup/bilder/epple.png"],
    ["img2", "./../../apps/old_website/bilder/epple2.png"]
],
()=>{
    var test2 = get_image("img2")

    console.log(image_data[1][0])    
})

//console.log(test2)

//document.body.appendChild(test2)

