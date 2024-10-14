const lienzo = document.querySelector('#lienzo')
const ctx = lienzo.getContext('2d');

const pixelSize = 20 // Tamaño de cada píxel


// Colors
const colors = {
  red: '#fe0002',
  blue: '#0001fc',
  yellow: '#ffd900',
  brown: '#6a0400',
  skin: '#ffd987',
  black: '#000000'
}

// Pixel map (1 = red, 2 = blue, 3 = skin, 4 = yellow, 5 = brown, 6 = black)

const marioPixels = [
  [0, 0,  0, 0, 1, 1, 1, 1, 1],
  [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 5, 5, 5, 3, 3, 6, 3, 0],
  [0, 0,  5, 3, 5, 3, 3, 3, 6, 3, 3],
  [0, 0, 5, 3, 5, 5, 3, 3, 3, 6, 3, 3, 3],
  [0, 0, 5, 5, 3, 3, 3, 3, 6, 6, 6, 6],
  [0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3],
  [0, 0, 0, 1, 1, 2, 1, 1, 1],
  [0, 0, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1],
  [0, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1],
  [0, 3, 3, 1, 2, 4, 2, 2, 4, 2, 1, 3, 3],
  [0, 3, 3, 3, 2, 2, 2, 2, 2, 2, 3, 3, 3],
  [0, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3],
  [0, 0, 0, 2, 2, 2, 0, 0, 2, 2, 2],
  [0, 0, 5, 5, 5, 0, 0, 0, 0, 5, 5, 5],
  [0, 5, 5, 5, 5, 0, 0, 0, 0, 5, 5, 5, 5],
  
];

// Dibujar a Mario píxel por píxel
function drawMario() {
  marioPixels.forEach((row, y) => {
    row.forEach((pixel, x) => {
      switch(pixel) {
        case 1: ctx.fillStyle = colors.red; break
        case 2: ctx.fillStyle = colors.blue; break
        case 3: ctx.fillStyle = colors.skin; break
        case 4: ctx.fillStyle = colors.yellow; break
        case 5: ctx.fillStyle = colors.brown; break
        case 6: ctx.fillStyle = colors.black; break
        default: ctx.fillStyle = 'transparent'; break
      }
      if (pixel !== 0) {
        ctx.fillRect(x  * pixelSize + 150, y * pixelSize + 50, pixelSize, pixelSize)
      }
    })
  })
}

drawMario()
drawPixel()
