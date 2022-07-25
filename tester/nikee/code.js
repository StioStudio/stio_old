

setup()

img.save("apple", "https://stiostudio.github.io/setup/bilder/Epple.gif")

sound.save("shoot", "https://nikeedev.github.io/playlib/assets/pickupCoin.wav");

pen.x = 400
pen.y = 400

forever(()=>{
    pen.clear()
    pen.style.innerHTML = img.get("apple")
    pen.x = 400
    pen.y = 400
    pen.style.height = 200
    pen.style.width = 200
    pen.rotation += 0.5
    pen.style.borderSize = 10
    pen.style.borderColor = rgb(150, 50, 130)
    pen.style.radius = "20%"
    pen.style.color = rgba(255,170,50,50)
    pen.rectangle()

})

