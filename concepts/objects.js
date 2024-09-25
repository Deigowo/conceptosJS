const tsuru = {
    model: 2000,
    color: 'verde',
    mileage: 200000,
    engine: '2.0 litros'
}
console.log(tsuru)
console.log(tsuru.model)
console.log(tsuru.color)
tsuru.engine = '4.0 litros'
console.log(tsuru)

tsuru.collitions = 5
console.log(tsuru)

tsuru['numero placas'] = 'XD 666 X'
console.log(tsuru)

tsuru.services = [2005, 2010, 2015, 2020]
console.log(tsuru['services'])

tsuru.start = function() {
    console.log('Revision de sistema')
    console.log('Revisando niveles')
    console.log('Vrum vrum')
    console.log('R!!')
    console.log('R!!')
    console.log('R!!')
    this.status = 'encendido'
}
tsuru.start()

console.log(tsuru.status)

tsuru['turn off'] = function() {
    console.log('Apagando')
    this.status = 'apagado'
    console.log(this.status)
}

tsuru['turn off']()

delete tsuru.placas