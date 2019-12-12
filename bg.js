const body = document.querySelector("body");

const IMAGE_NUMBER = 4;

function handleImgLoad() {
    console.log("finish loading");
}

function paintImage(IMAGE_NUMBER) {
    const image = new Image();
    image.src = `./image/${IMAGE_NUMBER + 1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
    // image.addEventListener("loadend", handleImgLoad);
} 

function genRandom() {
    const number = Math.floor(Math.random() * IMAGE_NUMBER);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();