const inputBorder = document.querySelector('#border')
const inputWidth = document.querySelector('#width')
const div = document.querySelector('.container')

let border = 0
let width = 0

const changeWidth = () => {
    return `${width}px`
}

const changeHeight = () => {
    return `${height}px`
}

const changeBorder = () => {
    return `${border}px`
}

inputBorder.addEventListener('change', (e) => {
    border = e.target.value
    div.style.borderRadius = changeBorder()
})

inputWidth.addEventListener('change', (e) => {
    width = e.target.value
    div.style.width = changeWidth()
})

inputHeight.addEventListener('change', (e) => {
    height = e.target.value
    div.style.height = changeHeight()
})
