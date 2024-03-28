let line = document.getElementsByClassName("line")[0]
let span = document.getElementsByTagName("span")[0]
let slides = document.getElementsByClassName("feedText")
let counter = 0
let blocker = document.getElementsByClassName("buttons")[0]
let comments = [
    {
        text: "“a web site made by a professional”",
        author: "Marla",
        location: "Pakistan",
    },
    {
        text: "“best web site for travelers”",
        author: "Tyler",
        location: "Usa",
    },
    {
        text: "“great tours”",
        author: "Daniil",
        location: "Russia",
    },
    {
        text: "“Good for travelers”",
        author: "Viktor",
        location: "Russia",
    },
]
console.log(comments[0].location);
line.style.width = span.innerHTML
function feedChange(direction) {
    blocker.style.pointerEvents = "none"
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
                    blocker.style.pointerEvents = "auto"
                    document.getElementById("firstSlide").style.transition = "0.3s"
                }, 300);
            }, 300);
        }, 300);
    }
    else {
        counter--
        if (counter == -1) {
            counter = 3
        }
        document.getElementById("firstSlide").style.transform = "translate(34px, 40px)"
        setTimeout(() => {
            for (let index = 0; index < slides.length; index++) {
                slides[index].children[2].innerHTML = comments[(counter + index) % comments.length].author
                slides[index].children[1].innerHTML = comments[(counter + index) % comments.length].text
                slides[index].children[3].innerHTML = comments[(counter + index) % comments.length].location
            }
            document.getElementById("firstSlide").style.transition = "0s"
            document.getElementById("firstSlide").style.opacity = 0
            document.getElementById("firstSlide").style.transform = "translate(0px, 0px)"
            setTimeout(() => {
                document.getElementById("firstSlide").style.transition = "0.3s"
                document.getElementById("firstSlide").style.opacity = 1
                blocker.style.pointerEvents = "auto"
            } , 300)
        }, 300)
    }
}
``