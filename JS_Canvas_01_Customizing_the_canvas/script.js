const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");


// если Вы меняете размеры canvas, то что на нем нарисовано исчезнет
function resize() {
  canvas.width = 500;
  canvas.height = 500;
}

function clearCanvas (canvas) {
    canvas.width = canvas.width;
    canvas.height = canvas.height;
}

context.beginPath();
context.moveTo(0, 0);
context.lineTo(500, 500);
context.stroke();
console.log(canvas);
