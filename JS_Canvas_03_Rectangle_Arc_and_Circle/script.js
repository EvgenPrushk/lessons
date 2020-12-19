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

context.beginPath();
// координаты центра окружности 2шт., радиус окружности, стартовый и конечный угол дуги в радианах, необязательный параметр в какую сторону рисуем дугу по умолчанию false
// context.arc(250, 250, 75,  Math.PI / 4,  5 * Math.PI / 4);
context.arc(250, 250, 100,  degreesToRadians(0),  degreesToRadians(360));
context.lineWidth = 10;
context.strokeStyle = "blue";
context.fillStyle = "red";
context.fill();
context.stroke();
