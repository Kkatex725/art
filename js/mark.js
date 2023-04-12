let left_text = document.querySelector(".left_text")
let right_text = document.querySelector(".right_text")
let mark_img1 = document.querySelector(".mark_img1")
let mark_img2 = document.querySelector(".mark_img2")
left_text.onmouseover = function () {
    mark_img1.style.opacity = "0.6"
    mark_img1.style.zIndex = "5"
    mark_img2.style.zIndex = "1"
    mark_img2.style.opacity = "0"
}

left_text.onmouseout = function () {
    mark_img1.style.opacity = "0"
    mark_img1.style.zIndex = "1"
    mark_img2.style.zIndex = "1"
    mark_img2.style.opacity = "0"
}


right_text.onmouseover = function () {
    mark_img2.style.opacity = "0.6"
    mark_img2.style.zIndex = "5"
    mark_img1.style.zIndex = "1"
    mark_img1.style.opacity = "0"
}

right_text.onmouseout = function () {
    mark_img1.style.opacity = "0"
    mark_img1.style.zIndex = "1"
    mark_img2.style.zIndex = "1"
    mark_img2.style.opacity = "0"
}
left_text.onclick = function () {
    window.location.href='generativeArt.html'
}
right_text.onclick = function () {
    window.location.href='photograph.html'
}
