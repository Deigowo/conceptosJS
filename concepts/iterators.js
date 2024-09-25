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

// forEach, map, filter 
// reduce

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sumatoria = numbers.reduce((a,b) => a + b )
console.log(numbers)
console.log(sumatoria)
const factorial = numbers.reduce((a, b) => a * b)
console.log(factorial)

// every regresa verdadero si todos cumplen

const ages = [23, 14, 37, 19, 18, 22, 27]
const elders = ages.every(age => age >= 18)
const youngers = ages.every(age => age < 18)
console.log(elders)
console.log(youngers)

// some regresa verdadero con uno que cumpla

const elders2 = ages.some(age => age >= 18)
const youngers2 = ages.some(age => age < 18)
console.log(elders2)
console.log(youngers2)

//Ejercicios

// Crear un array con elementos del 1 al 10
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const elements = array.map(element => element.toPrecision())
const filtro = array.filter(element => element > 5)
console.log(elements)
console.log(filtro)
// Crear uno nuevo con los cuadrados
const cuadrados = array.map(element => element ** 2)
// crear uno nuevo con las mitades
const mitades = array.map(element => element / 2)
// Crear uno nunvo con los pares
const pares = array.filter(element => element % 2 === 0)
// Crear uno nuevo con los impares
const impares = array.filter(element => element % 2 !== 0)
// Crear unon uevo con valores entre 3 y 8
const entreTres = array.filter(element => element >= 3 && element <= 8)