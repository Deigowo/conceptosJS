const main = document.querySelector('main')
const h1 = document.querySelector('h1')

const eightBall = () => {
    const question = prompt('Haz una pregunta')
    const random = Math.floor(Math.random() * 8)
    const options = [
        ":'v",
        'Erm...',
        'ola soy jomlander',
        'Ohellna',
        '77+33=100 👉🧠',
        'C giga topoyiyeo el pana cffffff',
        'Yo: yo *yo* Yo',
        'Administradores dónde están auxilio',
    ]
    h1.innerText = options[random]
    console.log(random)
}

main.addEventListener('click', eightBall)