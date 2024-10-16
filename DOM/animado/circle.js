const lienzo = document.querySelector('#lienzo')
const ctx = lienzo.getContext('2d');

let radio = 1
let sentido = true

const circle = {
    radio: 1,
    sentido: true,
    getcolor: function() {
        this.color = `hsl(${radio}, 50%, 60%)`
    },
    show: function() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(300, 200, circle.radio, 0, Math.PI * 2)
        ctx.fill()
    }
}

setInterval(() => {
    //Pintar circulo dinamico
    circle.radio = radio
    circle.sentido = sentido
    circle.getcolor()
    circle.show()
    radio = circle.sentido? radio + 3: radio -3
    sentido = radio > 200? !sentido: sentido
    sentido = radio < 2? !sentido: sentido
}, 20)