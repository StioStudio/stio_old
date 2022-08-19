/*
let rem = "https://stiostudio.github.io/tester/random/c/"

function checkLink (link){
    let lineCounter = link.length
    let counter = 0
    let lock = "stiostudio.github.io"
    let key = ""
    let rem = ""

    while(!(key == lock)){
        key = ""
        while(!(rem == "/")){
            lineCounter--
            rem = link[lineCounter]
            key = key + rem
        }
        counter++
    }


    return(counter)
}
*/
setup({

},()=>{

    sleep(1)

    function cuteLink(link){
        let counter = 0
        let output = ["https://"]
        link.remove("https://")

        let rem = ""

        rem = ""
        while(!(rem == "/")){
            let link = "hi there"
            counter++
        }

    }

    say(checkLink(rem))
    

})

/**
 * sheck for how many / it is in a link
 * 
 * https://stiostudio.github.io/tester/random/c/
 * start on the end and cute the diffrent part and place them in a array
 * like this:
 * ["stiostudio.github.io","tester","random","c"]
 * 
 * 
 */

