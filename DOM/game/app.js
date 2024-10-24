const lienzo = document.querySelector('#lienzo')
const ctx = lienzo.getContext('2d')
const points = document.getElementById('puntaje')
const maxPoints = document.getElementById('puntajeMax')

let maxScore = localStorage.getItem('puntajeMax')
                    ? JSON.parse(localStorage.getItem('puntajeMax'))
                    : 0

let direction = 1
let x = 3
let y = 1
let intervalid

let pointsInput = 0
let speed = 100

maxPoints.innerHTML = maxScore
points.innerHTML = pointsInput

ctx.font = "20px serif"

const snake = [
    {
        x: 2,
        y: 1,
        show: function () {
            ctx.fillText('🐺', this.x * 20, this.y * 20)
        }
    },
    {
        x: 1,
        y: 1,
        xSig: 2,
        ySig: 1,
        show: function () {
            ctx.fillText('🐶', this.x * 20, this.y * 20)
        }
    },
    {
        x: 0,
        y: 1,
        xSig: 1,
        ySig: 1,
        show: function () {
            ctx.fillText('🐶', this.x * 20, this.y * 20)
        }
    }
]

const food =  {
    x: 0,
    y: 0,
    show: function() {
        ctx.fillText('🍖', this.x * 20, this.y * 20)
    },
    appear: function() {
        //Generar valores this.x y this.y aleatorios
        this.x = Math.floor(Math.random() * 28)
        this.y = Math.floor(Math.random() * 19) + 1
    }
}

function checkEat() {
    if(snake[0].x === food.x && snake[0].y === food.y) {
        food.appear()
        snake.push( {...snake[1]} )
        pointsInput += 100
        points.innerHTML = pointsInput
        
        if(pointsInput > maxScore) {
            maxScore = pointsInput
            maxPoints.innerHTML = maxScore
            localStorage.setItem('puntajeMax', JSON.stringify(maxScore))
        }
    }
}

function SnakeCollission() {
    const head = snake[0]
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            return reloadSnake()
        }
    } 
    return false
}

// function increaseSpeed() {
//     speed = Math.max(40, speed -10)
//     clearInterval(intervalid)
//     intervalid = setInterval(nextMove, speed)
// }

function nextMove(x, y) {
    snake.forEach((item, idx) => {
        if(idx === 0) {
            item.x = x
            item.y = y
        } else {
            item.x = item.xSig
            item.y = item.ySig
            item.xSig = snake[idx-1].x
            item.ySig = snake[idx-1].y
        }
    })
}

function reloadSnake() {
    location.reload()
}

food.appear()
setInterval(() => {
    ctx.clearRect(0, 0, 600, 400)
    nextMove(x, y)
    SnakeCollission()
    snake.forEach(i => i.show())
    food.show()
    checkEat()
    if (direction === 1) x++
    else if (direction === 2) y++ 
    else if (direction === 3) x--
    else if (direction === 4) y--

    if (x > 29) x = 0
    else if (x < 0) x = 29
    if (y > 20) y = 1
    else if (y < 1) y = 20

}, 100)

document.querySelector('body')
    .addEventListener('keydown', e => {
        switch (e.key) {
            case 'ArrowLeft':
                case 'a':
                if(direction !== 1) {
                    direction = 3
                }
                break;
            case 'ArrowRight':
                case 'd':
                if(direction !== 3) {
                    direction = 1
                }
                break;
            case 'ArrowUp': 
                case 'w':
                if(direction !== 2) {
                    direction = 4
                }
                break;
            case 'ArrowDown': 
                case 's':
                if(direction !== 4) {
                    direction = 2
                }
                break;
    }
})
