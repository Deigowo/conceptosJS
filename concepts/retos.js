function wrapping(gifts) {
    const envueltos = []
    for(let gift of gifts){
        let tapa = '*'.repeat(gift.length + 2)
        let g = `${ tapa }\n*${ gift }*\n${ tapa }`
        envueltos.push(g)
    }

  return envueltos
}

const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)


function createCube(size) {
  const space = ' '
  const faceA= '/\\'
  const backA= '_\\'
  const faceB= '\\/'
  const backB= '_/'
  let cubeA = ''
  let cubeB = ''
  for(let i = 0; i < size; i++){
    let line = space.repeat(i)
    line += faceA.repeat(size - i)
    line += backA.repeat(size)
    cubeA = line + '\n' + cubeA
  } for(let i = size; i > 0; i--){
    let line = space.repeat(i - 1)
    line += faceB.repeat(size - (i - 1))
    line += backB.repeat(size)
    cubeB = line + '\n' + cubeB
  }

  let line = space.repeat(i)
  line += faceA.repeat(size - i)
  line += backA.repeat(size)

  console.log(cubeA + cubeB)
  return ''
}

const cube = createCube(2)
console.log(cube)

const space = ' '
const faceA = '/\\'
const backA = '_\\'
const faceB = '\\/'
const backB = '_/'
const faceC = 
'/\\'
'_\\'
'_/'
'/\\'+'_\\'
'\\/'+'_/'
' '+'/\\'+'_\\'+'_\\'
'/\\'+'/\\'+'_\\'+'_\\'