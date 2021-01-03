const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

// const triangle = {
//     centerX: canvas.width / 2,
//     centerY: canvas.height / 2,
//     radius: 150,
//     angle: 0,
//     angleSpped: Math.PI * 0.01,
// }

// animation({
//   clear() {
//     context.clearRect(0, 0, canvas.width, canvas.height);
//   },

//   update() {
//     triangle.angle += triangle.angleSpped;
//   },

//   render() {
//       const dAngle = (Math.PI * 2) / 3;

//     context.beginPath();
//     context.moveTo(
//         triangle.centerX + triangle.radius * Math.cos(triangle.angle),
//         triangle.centerY + triangle.radius * Math.sin(triangle.angle),
//     );
//     context.lineTo(
//         triangle.centerX + triangle.radius * Math.cos(triangle.angle + dAngle),
//         triangle.centerY + triangle.radius * Math.sin(triangle.angle + dAngle),
//     );
//     context.lineTo(
//         triangle.centerX + triangle.radius * Math.cos(triangle.angle + 2 * dAngle),
//         triangle.centerY + triangle.radius * Math.sin(triangle.angle + 2 * dAngle),
//     );
//     context.closePath();

//     context.fillStyle = "yellow";
//     context.fill();
//   },
// });

const stars = [];
for (let x = 0; x < 2; x++) {
  for (let y = 0; y < 2; y++) {
    stars.push({
      centerX: (canvas.width / 4) * (2 * x + 1),
      centerY: (canvas.height / 4) * (2 * y + 1),
      n: stars.length + 5,
      color: ["red", "green", "blue", "black"][stars.length],
      smallRadius: 25,
      bigRadius: 50,
      angle: 0,
      angeleSpeed: Math.PI * (x + y + 1) * 0.35 * (-1) ** y,
    });

  }

}

animation({
  update({
    secondPart
  }) {
    for (const star of stars) {
      star.angle += star.angeleSpeed * secondPart;
    }
  },

  clear() {
    canvas.width |= 0;
  },

  render() {
    for (const star of stars) {
      const dAngle = Math.PI / star.n;
      context.beginPath();
      context.moveTo(
        star.centerX + star.bigRadius * Math.cos(star.angle),
        star.centerY + star.bigRadius * Math.sin(star.angle),

      );

      for (let i = 0; i < star.n * 2; i++) {
        const r = i % 2 ? star.smallRadius : star.bigRadius;

        context.lineTo(
          star.centerX + r * Math.cos(star.angle + dAngle * i),
          star.centerY + r * Math.sin(star.angle + dAngle * i),
        );

      }
      context.fillStyle = star.color;
      context.fill();
    }
  },

});