let line = document.getElementsByClassName("line")[0]
let span = document.getElementsByTagName("span")[0]
line.style.width = span.innerHTML
function feedChange() {
    document.getElementById("secondSlide").style.zIndex = "999"
}