const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const tps = 200;
const keys = {};
let x = 0;
let y = 0;

function logic() {
    if (keys["ArrowRight"]) {
        x += 10;
    }
    if (keys["ArrowLeft"]) {
        x -= 10;
    }
    if (keys["ArrowUp"]) {
        y -= 10;
    }
    if (keys["ArrowDown"]) {
        y += 10;
    }
}

function render() {
    ctx.fillStyle = "rgb(0 255 0)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "rgb(255 255 255)";
    ctx.fillRect(x, y, 100, 100);


    window.requestAnimationFrame(render);
}



setInterval(logic, 1000/tps);
window.requestAnimationFrame(render)

window.onresize = function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.onresize();

window.addEventListener("keydown", (event) => {
    keys[event.key] = true;
});

window.addEventListener("keyup", (event) => {
    keys[event.key] = false;
});