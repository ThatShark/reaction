let changeTime = 0, clickTime = 0, randomChangeTime = 0;
let square = document.querySelector(".square");
let text = document.querySelector('#text');
let button = document.querySelector('#button');

button.addEventListener("click", Start);

function Start() {
    button.classList.add("active");
    square.style.background = "#ed6896";
    randomChangeTime = setTimeout(ColorChange, (Math.random() * 3 + 1.5) * 1000);
    square.addEventListener("click", ClickEarly);
    button.removeEventListener("click", Start);
}

function ColorChange() {
    changeTime = new Date().getTime();
    square.style.background = "#67f285";
    square.removeEventListener("click", ClickEarly);
    square.addEventListener("click", ClickWhenColorChange);
}

function ClickWhenColorChange() {
    clickTime = new Date().getTime();
    const result = (clickTime - changeTime) / 1000;
    button.classList.remove("active");
    text.innerHTML = "你的反應時間是" + result + "秒";
    document.querySelector('#button').value = "重新開始";
    square.removeEventListener("click", ClickWhenColorChange);
    button.addEventListener("click", Start);
}

function ClickEarly() {
    clearTimeout(randomChangeTime);
    square.removeEventListener("click", ClickEarly);
    button.classList.remove("active");
    text.innerHTML = "太早了!";
    document.querySelector('#button').value = "重新開始";
    button.addEventListener("click", Start);
}