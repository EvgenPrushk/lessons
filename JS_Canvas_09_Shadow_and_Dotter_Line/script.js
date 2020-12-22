const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

// let shadowBlur = 0;
// let shadowOffsetX = 0;
// let shadowOffsetY = 0;
// let lineDashOffset = 0;

// const TIME_SCALE = 10;

// animation({
//     clear() {
//         canvas.width |= 0;
//     },

//     update( {timestamp}) {
//         shadowBlur = 10 + 10 * Math.cos(timestamp * TIME_SCALE);
//         shadowOffsetX = 10 + 10 * Math.cos(timestamp * TIME_SCALE);
//         shadowOffsetY = 10 + 10 * Math.sin(timestamp * TIME_SCALE);
//     },

//     render() {
//         context.beginPath();
//         context.rect(100, 180, 250, 250)
//         context.shadowColor = "red";
//         context.shadowBlur = shadowBlur;
//         context.shadowOffsetX = shadowOffsetX;
//         context.shadowOffsetY = shadowOffsetY;
//         context.strokeStyle = "blue";
//         context.stroke();
//     },
// });
// const dash = Array(100).fill().map((_, i) => i * 2 + 1);

// animation({
//     clear() {
//         canvas.width |= 0;
//     },

//     update({ secondPart }) {
//         lineDashOffset += secondPart * TIME_SCALE;
//     },

//     render() {
//         context.beginPath();
//         context.setLineDash(dash);
//         context.lineDashOffset = lineDashOffset;
//         context.lineWidth = 5;
//         context.rect( 100, 180, 300, 300);
//         context.stroke();

//     },
// });

// function drawLine(y) {
//     context.beginPath();
//     context.moveTo(0, y);
//     context.lineTo(500, y);
//     context.stroke();
// }

// let miterLimit = 100;
// const TIME_SCALE = 0.0005;

// animation({
//     clear() {
//         canvas.width |= 0;
//     },

//     update({ timestamp }) {
//         miterLimit = 100 - 100 * Math.cos(timestamp * TIME_SCALE);
//     },

//     render() {
//         context.beginPath();
//         context.moveTo(0, canvas.height / 2);

//         for (let i = 1; i <= 100; i++) {
//             const y = canvas.height / 2 + 100 * (-1) ** i;
//             context.lineTo( i ** 2, y);
//         }

//         context.lineWidth = 5;
//         context.miterLimit = miterLimit;
//         context.stroke();

//         context.beginPath();
//         context.moveTo(0, canvas.height / 2 - 75);
//         context.lineTo(canvas.width, canvas.height / 2 - 75);
//         context.strokeStyle = "blue";
//         context.lineWidth = 1;
//         context.stroke();

//         context.beginPath();
//         context.moveTo(0, canvas.height / 2 + 75);
//         context.lineTo(canvas.width, canvas.height / 2 + 75);
//         context.strokeStyle = "blue";
//         context.lineWidth = 1;
//         context.stroke();

//         context.fillText(miterLimit, canvas.width, 0);
//         context.font = "50px solid gray"
//         context.textBaseline = "top";
//         context.textAlign = "right";
//     }
// });

const x = canvas.width / 2;
const y = canvas.height / 2;

const R = 200;
const r = 100;

let angle = 0;
const ANGLE_SPEED = Math.PI * 0.1;

let lineDashOffset = 0;

animation({
    clear() {
        canvas.width |= 0;
    },

    update({ timestamp, secondPart }) {
        angle = Math.PI * 0.25 * Math.cos(timestamp * 0.001);
        lineDashOffset -= secondPart * 10;
    },

    render() {
        const dAngle = Math.PI / 5;


        context.beginPath();
        context.moveTo(x + R * Math.cos(angle), y + R * Math.sin(angle));

        for (let i = 1; i < 10; i++) {
            const radius = i % 2 ? r : R;
            context.lineTo(
                x + radius * Math.cos(angle + dAngle * i),
                y + radius * Math.sin(angle + dAngle * i),
            );

        }

        context.closePath();
        context.lineWidth = 3;
        context.lineDashOffset = lineDashOffset;
        context.setLineDash([10, 10]);
        context.stroke();

        context.beginPath();
        context.arc(x, y, R + 2, 0, Math.PI * 2);
        context.lineWidth = 2;
        context.strokeStyle = "blue";
        context.setLineDash([100, 100]);
        context.stroke();
    },


})