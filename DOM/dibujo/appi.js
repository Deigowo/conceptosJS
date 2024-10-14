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

ctx.fillStyle = 'red'
ctx.beginPath()
ctx.arc(230, 140, 5, 0, Math.PI * 2, true)
ctx.fill()
ctx.stroke()

ctx.fillStyle = 'red'
ctx.beginPath()
ctx.arc(270, 140, 5, 0, Math.PI * 2, true)
ctx.fill()
ctx.stroke()

ctx.fillStyle = 'red'
ctx.beginPath()
ctx.moveTo(250, 150)
ctx.lineTo(260, 180)
ctx.lineTo(240, 180)
ctx.fill()
ctx.stroke()

ctx.fillStyle = 'red'
ctx.beginPath()
ctx.roundRect(220, 210, 60, 20, 10)
ctx.fill()
ctx.stroke()

ctx.fillStyle = 'yellow'
ctx.beginPath()
ctx.moveTo(230, 210)
ctx.lineTo(250, 210)
ctx.lineTo(240, 220)
ctx.fill()

ctx.fillStyle = 'yellow'
ctx.beginPath()
ctx.moveTo(250, 210)
ctx.lineTo(270, 210)
ctx.lineTo(260, 220)
ctx.fill()