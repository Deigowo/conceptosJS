const body = document.querySelector('body')
const btnChange = document.querySelector('#btnchange')

const changeColor = () => {
    const color = prompt('Escribe un color: ')
    body.style.backgroundColor = color
}

btnChange.addEventListener('click', changeColor)