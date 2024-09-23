const sectionReload = document.getElementById('Reload')
const playButton = document.getElementById('play-button')
const reloadButton = document.getElementById('reload-button')

const spanPlayerLifes = document.getElementById('player-lifes')
const spanPClifes = document.getElementById('pc-lifes')

const sectionStart = document.getElementById('start')
const sectionMessages = document.getElementById('Resultado')
const sectionAttacks = document.getElementById('attack-selection')
const sectionResults = document.getElementById('Results')
const playersAttack = document.getElementById('players-attack')
const pcsAttack = document.getElementById('pcs-attack')

const buttonContainer = document.getElementById('buttonContainer')

class Player {
    constructor(name, life) {
        this.name = name
        this.life = life
        this.attacks = []
    }
}

class PC {
    constructor(name, life) {
        this.name = name
        this.life = life
        this.attacks = []
    }
}

let user = new Player('Jugador', 3) 
let pc = new PC('Computadora', 3)   
let wins = 0    
let pcwins = 0  

user.attacks.push(
    {name: 'piedra', id: 'rock-button'},
    {name: 'papel', id: 'paper-button'},
    {name: 'tijera', id: 'scissors-button'},
)

pc.attacks.push(
    {name: 'piedra', id: 'rock-button'},
    {name: 'papel', id: 'paper-button'},
    {name: 'tijera', id: 'scissors-button'},
)

function startGame() {
    sectionAttacks.style.display = 'none'
    sectionReload.style.display = 'none'
    sectionResults.style.display = 'none'
    sectionStart.style.display = 'block'

    playButton.addEventListener('click', showAttacks)

    reloadButton.addEventListener('click', reloadGame)
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function showAttacks(){
    sectionStart.style.display = 'none'
    sectionAttacks.style.display = 'block'
    buttonContainer.innerHTML = ''

    user.attacks.forEach((attack) => {
        const attackButton = document.createElement('button')
        attackButton.id = attack.id
        attackButton.classList.add('attacks', 'BAttack')
        attackButton.textContent = attack.name
        attackButton.addEventListener('click', () => handleAttack(attack.name))
        buttonContainer.appendChild(attackButton)
    })
}

function handleAttack(userAttack) {
    const pcAttack = pc.attacks[random(0, 2)].name
    playersAttack.textContent = `Elegiste: ${userAttack}`
    pcsAttack.textContent = `La computadora eligió: ${pcAttack}`

    determineWinner(userAttack, pcAttack)
}

function determineWinner(userAttack, pcAttack) {
    if (pcAttack === userAttack) {
        sectionMessages.textContent = "EMPATE!"
    } else if(
        (userAttack === 'piedra' && pcAttack === 'tijera') ||
        (userAttack === 'papel' && pcAttack === 'piedra') ||
        (userAttack === 'tijera' && pcAttack === 'papel')
    ) {
        sectionMessages.textContent = "¡Ganaste!"
        wins++  
    } else {
        sectionMessages.textContent = "Perdiste :("
        pcwins++  
    }

    spanPlayerLifes.textContent = `Vidas: ${user.life - pcwins}`
    spanPClifes.textContent = `Vidas: ${pc.life - wins}`

    lifesReview()
}

function lifesReview() {
    if (wins === user.life || pcwins === pc.life) {
        if (wins > pcwins) {
            alert('¡¡GANASTE!!')
            finalMesage('¡FELICIDADES!')
        } else {
            alert('PERDISTE :(')
            finalMesage('Suerte a la próxima')
        }
    }
}

function reloadGame() {
    location.reload()
}

function finalMesage(resultadoFinal) {
    sectionMessages.innerHTML = resultadoFinal
    sectionReload.style.display = 'block'
}

window.addEventListener('load', startGame)
