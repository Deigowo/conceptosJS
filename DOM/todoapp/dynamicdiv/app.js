const inputBorderRadius = document.querySelector('#border')
const inputWidth = document.querySelector('#width')
const inputHeight = document.querySelector('#height')
const inputShadowBox = document.querySelector('#shadowBox')
const div = document.querySelector('.container')

let width = 0
let borderRadius = 0
let shadowBox = 0
let height = 0

const changeWidth = () => {
    return `${width}px`
}

const changeHeight = () => {
    return `${height}px`
}

const changeBorderRadius = () => {
    return `${borderRadius}px`
}

const changeShadowBox = () => {
    return `0px 0px ${shadowBox}px rgba(0, 0, 0, 0.5)`
}

inputBorderRadius.addEventListener('input', (e) => {
    borderRadius = e.target.value
    div.style.borderRadius = changeBorderRadius()
})

inputWidth.addEventListener('input', (e) => {
    width = e.target.value
    div.style.width = changeWidth()
})

inputHeight.addEventListener('input', (e) => {
    height = e.target.value
    div.style.height = changeHeight()
})

inputShadowBox.addEventListener('input', (e) => {
    shadowBox = e.target.value
    div.style.boxShadow = changeShadowBox()
})
