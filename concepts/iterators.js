// High Order Functions
// Funciones de orden Superior
// Son funciones que reciben funciones como parametros

const suma = (a, b) => a + b
const resta = (a, b) => a - b

const operation = (a, b, callback) => {
    const result = callback(a, b)
    console.log('El resultado es: ' + result)
}

operation(12, 5, suma)
operation(12, 5, resta)
operation(12, 5, (a, b) => a * b)

const cars = ['Vocho', 'Athos', 'Pointer', 'Tsuru', 'BMW']

cars.forEach((car) => { console.log(car) })

cars.filter(car => car === 'tsuru')

let filtrados = cars.filter((car) => car === 'Tsuru')
console.log(filtrados)

filtrados = cars.filter((car) => car.includes('o'))
console.log(filtrados)

// Regresar los carros que comiencen con a
filtrados = cars.filter((car) => car.startsWith('A'))
console.log(filtrados)

// Regresar los que terminen con u
filtrados = cars.filter((car) => car.endsWith('u'))
console.log(filtrados)

// Regresar los que tengan menos de 5 letras
filtrados = cars.filter((car) => car.length < 5)
console.log(filtrados)

// Regresar los que incluyan la letra z 
filtrados = cars.filter((car) => car.includes('z'))
console.log(filtrados)

// Metodo map
const CARS = cars.map(car => car.toUpperCase())
console.log(cars)
console.log(CARS)

const SRAC = cars.map(car => car.split('').reverse().join(''))
console.log(SRAC)

function wrapping(gifts) {
    const envueltos = []
  return gifts.map(gift => {
    let tapa = '*'.repeat(gift.length + 2)
    let g = `${ tapa }\n*${ gift }*\n${ tapa }`
    return g
  })
}

const carsEnvueltos = wrapping(cars)
carsEnvueltos.forEach(car => console.log(car))