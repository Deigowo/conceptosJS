// Strings en JavaScript
// Hello, I'm Diego and I'm from Tlaxco

let name = "Diego"
let city = "Tlaxco"
let message = "Hello, I'm " + name + " and I'm from " + city
console.log(message)
message = 'Hello, I\'m ' + name + ' and I\'m from ' + city
console.log(message)

//Template literals
message = `Hello, I'm ${ name } and I'm from ${ city }`
console.log(message)

// Funciones para strings
console.log(message.toLowerCase())
console.log(message.length)
console.log(message.toUpperCase())
console.log(message.includes('from'))
console.log(message.startsWith('Hello'))
console.log(message.endsWith('.'))

