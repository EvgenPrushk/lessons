const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;



// context.beginPath();
// context.moveTo(0, 0);
// context.lineTo(300, 400);
// context.strokeStyle = "blue";
// context.lineWidth = 10;
// context.stroke();

// context.beginPath();
// context.moveTo(300, 400);
// context.lineTo(500, 0);
// context.strokeStyle = "red";
// context.lineWidth = 2;
// context.stroke();

context.beginPath();
context.moveTo(100, 100);
context.lineTo(300, 400);
context.lineTo(450, 200);

// цвет
context.strokeStyle = "blue";
// ширина линии
context.lineWidth = 10;
// вид околчаний (колпачков)
context.lineCap = "round";  // square, bevel 
// вид изгиба линий (места соединения)
context.lineJoin = "round"; // square, bevel 

context.stroke();