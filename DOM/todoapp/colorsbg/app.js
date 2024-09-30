const body = document.querySelector('body')
const btnChange = document.querySelector('#btnchange')
const span = document.querySelector('h2 span')

const randomColor = () => {
    const hexadecimal = '0123456789ABCDEF'
    let color = '#'
    for (i=0; i<6; i++) {
        color += hexadecimal[Math.floor(Math.random() * 16)]

    }
    return color
}

const changeColor = () => {
    const color = randomColor()
    body.style.backgroundColor = color
    span.innerText = color
}

btnChange.addEventListener('click', changeColor)
