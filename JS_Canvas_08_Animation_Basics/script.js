const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

const triangle = {
    centerX: canvas.width / 2,
    centerY: canvas.height / 2,
    radius: 150,
    angle: 0,
    angleSpped: Math.PI * 0.01,
}

animation({
  clear() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  },

  update() {
    triangle.angle += triangle.angleSpped;
  },

  render() {
      const dAngle = (Math.PI * 2) / 3;

    context.beginPath();
    context.moveTo(
        triangle.centerX + triangle.radius * Math.cos(triangle.angle),
        triangle.centerY + triangle.radius * Math.sin(triangle.angle),
    );
    context.lineTo(
        triangle.centerX + triangle.radius * Math.cos(triangle.angle + dAngle),
        triangle.centerY + triangle.radius * Math.sin(triangle.angle + dAngle),
    );
    context.lineTo(
        triangle.centerX + triangle.radius * Math.cos(triangle.angle + 2 * dAngle),
        triangle.centerY + triangle.radius * Math.sin(triangle.angle + 2 * dAngle),
    );
    context.closePath();
   
    context.fillStyle = "yellow";
    context.fill();
  },
});
