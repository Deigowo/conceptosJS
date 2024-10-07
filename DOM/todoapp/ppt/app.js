const images = document.querySelectorAll('.images img')
const imgUser = document.querySelector('#choiceUser')
const imgPC = document.querySelector('#choicePC')
const spanMessages = document.querySelector('span')

let user = 0
let pc = 0
let wins = 0

const getChoiceUser = (e) => {
    const image = e.target
    const choiceUser = image.getAttribute('data-id')
    const imageUser = image.src
    // Pintar imagen de choices
    imgUser.src = imageUser
    // Llamar la funcion play 
    play(choiceUser)
}

const play = choiceUser => {
    const choicePC = Math.floor(Math.random() * 3) + 1
    const imagePC = images[choicePC - 1].src
    imgPC.src = imagePC
    // Llamar la funcion winner
    winner(choiceUser, choicePC)
}

const eleccion = (choiceUser, choicePC) => {
    if (choicePC === choiceUser) {
        spanMessages.textContent = 'Empate'
    } else if (
        (choiceUser === 1 && choicePC === 3) ||
        (choiceUser === 2 && choicePC === 1) ||
        (choiceUser === 3 && choicePC === 2) 
    ) {
        spanMessages.textContent = 'Ganaste'
        wins++
    } else {
        spanMessages.textContent = 'Perdiste'
        wins++
    }
}


images.forEach(image => image.addEventListener('click', getChoiceUser))