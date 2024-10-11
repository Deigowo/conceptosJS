const lienzo = document.querySelector('#lienzo')
const ctx = lienzo.getContext('2d')

ctx.fillStyle = 'green'
ctx.roundRect(200, 100, 100, 150, 10)
ctx.fill()

ctx.beginPath()

ctx.fillStyle = 'black'
ctx.roundRect(200, 100, 100, 20, 10)
ctx.fill()

ctx.fillStyle = 'white'
ctx.beginPath()
ctx.arc(230, 140, 10, 0, Math.PI * 2, true)
ctx.fill()
ctx.stroke()

ctx.fillStyle = 'white'
ctx.beginPath()
ctx.arc(270, 140, 10, 0, Math.PI * 2, true)
ctx.fill()
ctx.stroke()