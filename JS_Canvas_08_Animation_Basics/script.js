const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

context.beginPath();
context.moveTo(300, 400);
context.lineTo(250, 250);
context.lineTo(320, 100);
// возвращает в начальную точку (замыкает фигуру)
context.closePath();
// context.fillStyle = "green"
// context.fill();
context.stroke();