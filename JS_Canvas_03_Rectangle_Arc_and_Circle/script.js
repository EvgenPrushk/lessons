const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
const colors = ["red", "green", "blue"];
const degreesToRadians = (n) => (n / 180) *  Math.PI;
const radiansToDegrees = (n) => (n / Math.PI) * 180;

canvas.width = 500;
canvas.height = 500;

// for (let i = 0; i < colors.length; i++) {
//   const color = colors[i];

//   context.beginPath();
//   // рисование прямоугольника начинаем с координаты верхнего левого угла
//   context.rect(100 + i * 50, 100 + i * 35, 300, 200);

//   context.fillStyle = color;
//   context.lineWidth = 5;
//   context.lineJoin = "round";

//   context.fill();
//   context.stroke();
// }

// рисуем окружность


// координаты центра окружности 2шт., радиус окружности, стартовый и конечный угол дуги в радианах, необязательный параметр в какую сторону рисуем дугу по умолчанию false
// context.arc(250, 250, 75,  Math.PI / 4,  5 * Math.PI / 4);
context.beginPath()
context.strokeStyle = "black";
context.fillStyle = "blue";
context.rect(100, 100, 300, 300);
context.lineWidth = 10;
context.fill();
context.stroke();

context.beginPath()
context.arc(250, 250, 100,  degreesToRadians(-40),  degreesToRadians(270));
context.lineWidth = 5;
context.strokeStyle = "red";
context.fillStyle = "yellow";
context.fill();
context.stroke();
