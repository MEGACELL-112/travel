let line = document.getElementsByClassName("line")[0]
let span = document.getElementsByTagName("span")[0]
let slides = document.getElementsByClassName("feedText")
let counter = 0
let comments = [
    {
        text: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
        author: "Marla Singer",
        location: "Pakistan",
    },
    {
        text: "“fight club”",
        author: "Tyler Derden",
        location: "Usa",
    },
    {
        text: "“Daniil delay dz”",
        author: "Kirill Yerenkoff",
        location: "Russia",
    },
    {
        text: "“ya ne mogu pochinit piton”",
        author: "Daniil Gribachev",
        location: "Russia",
    },
]
console.log(comments[0].location);
line.style.width = span.innerHTML
function feedChange(direction) {
    if (direction == 'up') {
        counter++
        // document.getElementById("secondSlide").style.zIndex = "999"
        document.getElementById("firstSlide").style.opacity = "0"
        setTimeout(() => {
            document.getElementById("secondSlide").style.transform = "translate(-34px, -40px)"
            setTimeout(() => {
                document.getElementById("firstSlide").style.transition = "0s"
                document.getElementById("firstSlide").style.opacity = 1
                document.getElementById("secondSlide").style.transition = "0s"
                document.getElementById("secondSlide").style.opacity = 0
                document.getElementById("secondSlide").style.transform = "translate( 0px, 0px)"
                for (let index = 0; index < slides.length; index++) {
                    slides[index].children[2].innerHTML = comments[(counter + index) % comments.length].author
                    slides[index].children[1].innerHTML = comments[(counter + index) % comments.length].text
                    slides[index].children[3].innerHTML = comments[(counter + index) % comments.length].location
                }
                setTimeout(() => {
                    document.getElementById("secondSlide").style.transition = "0.3s"
                    document.getElementById("secondSlide").style.opacity = 1
                    document.getElementById("firstSlide").style.transition = "0.3s"
                }, 300);
            }, 300);
        }, 300);
    }
    else {
        document.getElementById("firstSlide").style.transform = "translate(34px, 40px)"
        setTimeout(() => {
            document.getElementById("firstSlide").style.transition = "0s"
            document.getElementById("firstSlide").style.opacity = 0
            document.getElementById("firstSlide").style.transform = "translate(0px, 0px)"
            setTimeout(() => {
                document.getElementById("firstSlide").style.transition = "0.3s"
                document.getElementById("firstSlide").style.opacity = 1
            } , 300)
        }, 300)
    }
}