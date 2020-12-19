const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
const CELL_SIZE = 20;

canvas.width = 540;
canvas.height = 540;

// context.beginPath();
// context.moveTo(188, 130);
// //сначала пишем две координаты (х, у) первой контрольной точки,
// //затем пишем две координаты (х, у) второй контрольной точки,
// //а затем пишем координаты финальной контрольной точки
// context.bezierCurveTo(140, 10, 388, 10, 250, 250);
// // context.fillStyle = "green";
// // context.fill();
// context.lineWidth = 10;
// context.stroke();


// context.beginPath();
// context.moveTo(0, 500);
// //сначала пишем две координаты (х, у) первой контрольной точки, 
// //а затем пишем координаты финальной контрольной точки
// context.quadraticCurveTo(250, 0, 500, 500);
// context.fillStyle = "green";
// context.fill();
// context.lineWidth = 3;
// context.stroke();

   


for (let i = 0; i <= canvas.width / CELL_SIZE; i++) {   
    context.beginPath();
    context.moveTo(20, i * CELL_SIZE);
    context.lineTo(520, i * CELL_SIZE);
    context.strokeStyle = "#666666";
    context.stroke();    
}

for (let j = 0; j <= canvas.height / CELL_SIZE; j++) {
   
    context.beginPath();
    context.moveTo(j * CELL_SIZE, 20);
    context.lineTo(j * CELL_SIZE, 520);
    context.stroke();    
}

context.beginPath();
context.moveTo(520, 20);
context.arc(520, 20, 5, 0, 2 * Math.PI);
context.lineTo(20, 260);
context.arc(20, 260, 5, 0, 2 * Math.PI);
context.lineTo(520, 260);
context.arc(520, 260, 5, 0, 2 * Math.PI);
context.lineTo(20, 520);
context.arc(20, 520, 5, 0, 2 * Math.PI);
context.lineWidth = 2;
context.strokeStyle = "#FFAA00";
context.stroke();

context.beginPath();
context.moveTo(520, 20);
context.bezierCurveTo(20, 260, 520, 260, 20, 520);
context.lineWidth = 3;
context.strokeStyle = "green";
context.stroke();