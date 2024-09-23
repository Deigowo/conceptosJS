//Funciones y Funcioness de flecha
// function nameFunction(params){
//     body
// return
// }

// Arrow Function
// const nameFunction = (params) => {
//     body 
//     return
// }

function sayHello(){
    console.log('Hello')
}

sayHello()

const sayHelloInSpanish = () => console.log('Hola')
sayHelloInSpanish();

function SayHelloTo1(name) {
    console.log('Hello ' + name)
}
SayHelloTo1('Batman')

const sayHelloTo = name => console.log(`Hello ${name}`)
sayHelloTo('Spiderman')

function fullName(name, lastName){
    return `${name} ${ lastName }`
}
fullName('Brunce', 'Wayne')

const fullName2 = (name, lastName) => console.log(`${name} ${lastName}`)
fullName2('Clark', 'Kent')

function duplicateNumber(number){
    return number * 2
}
let duplicate = duplicateNumber(5)
console.log(duplicate)

const halfNumber = number => number / 2
let half = halfNumber(10)
console.log(half)

// Parametros opcionales 
function greetings(name = 'Invitado'){
    console.log(`Hola ${name}`)
}
greetings('Batman')
greetings()

const greetings2 = (name = 'Invitado') => console.log(`Hola ${name}`)  
greetings2('Spiderman')
greetings2()