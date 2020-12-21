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

let  miterLimit = 100;

animation({
    clear() {
        canvas.width  |= 0;
    },

    update({timestamp}) {
        miterLimit = 100 - 100 * Math.cos(timestamp);
    },

    render() {
        context.beginPath();
        context.moveTo(0, canvas.height / 2);
        for (let i = 1; i <= 100; i++) {
            const y = canvas.height / 2 + 100 * (- 1) ** i;
            context.lineTo(i ** 2, y);            
        }
        context.lineWidth = 5;
        context.miterLimit = miterLimit;
        context.stroke();

        context.beginPath();
        context.moveTo(0, canvas.height / 2 - 75);
        context.lineTo(canvas.width, canvas.height / 2 - 75);
        context.lineWidth = 1;
        context.strokeStyle = "blue";
        context.stroke();

        context.beginPath();
        context.moveTo(0, canvas.height / 2 + 75);
        context.lineTo(canvas.width, canvas.height / 2 + 75);
        context.lineWidth = 1;
        context.strokeStyle = "blue";
        context.stroke();

        context.fillText(miterLimit, canvas.width, 0);
        context.font = "50px solid gray";
        context.textBaseline = "top";
        context.textAlign = "right";
    },
});