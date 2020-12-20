const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;
const CELL_SIZE = 1;

main();

async function main() {
    const city = await loadImage("sets/city.jpg");
    console.log(city.width, city.height);
    canvas.width = city.width;
    canvas.height = city.height;
    
    for (let y = 0; y < city.height / CELL_SIZE; y++) {
        for (let x = 0; x < city.width/ CELL_SIZE; x++) {
            if ((x + y) % 2 === 0) {
                continue;
            }

            context.drawImage(
                city,
                x * CELL_SIZE,
                y * CELL_SIZE,
                CELL_SIZE,
                CELL_SIZE,
                x * CELL_SIZE,
                y * CELL_SIZE,
                CELL_SIZE,
                CELL_SIZE,
            )
            
        }
        
    }

// 1 - само изображение, 2 и 3 -координаты x и у верхнего угла, 4 и 5 - ширина и высота из изображения
//   6 и 7 координаты x и у верхнего угла, 8 и 9 - ширина и высота куда мы хотить вписать выбранное изображение
//    context.drawImage(city, 141, 50, 55, 113, 5, 5, 100, 125);
}

function loadImage (src) {
    return new Promise((resolve) =>{
        const image = new Image();
        image.src = src;
        image.onload = () => resolve(image);
    });
}