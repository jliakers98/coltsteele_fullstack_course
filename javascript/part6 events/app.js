const btn2 = document.querySelector("#v2");
btn2.onclick = function () {
    btn2.innerText = "Clicked!"
}

const btn3 = document.querySelector("#v3");
btn3.addEventListener('click', function () {
    btn3.innerText = "Clicked!"
})

const btn4 = document.querySelector("#v4");
let twistT = true
let shoutT = false

function twist(i) {
    i.innerText = "Twist!"
    twistT = false
    shoutT = true
}
function shout(i) {
    i.innerText = "Shout!"
    twistT = true
    shoutT = false
}

btn4.addEventListener('click', function () {
    if (twistT) {
        twist(btn4)
    }
    else {
        shout(btn4)
    }
})