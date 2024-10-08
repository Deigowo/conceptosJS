const inputTarea = document.getElementById('tareatxt')
const btnAgregar = document.getElementById('addTarea')
const divTareas = document.getElementById('tareas')
const myForm = document.querySelector('#myForm')


addTarea.addEventListener('click', () => {
    const tarea = inputTarea.value
    divTareas.appendChild(createTarea(tarea))
    inputTarea.value = ''
    localStorage.setItem('miTarea', tarea)
    }
)

//Otro metodo para eliminar
// const deleteItem = (e) => {
//     const pa = e.target.parentElement
//     pa.remove()
// }

// Boton eliminar
const createTarea = (tarea) => {
    const div = document.createElement('div')
    const p = document.createElement('p')
    const button = document.createElement('button')
    button.addEventListener('click', () => {
        div.remove()
    })

    p.innerText = tarea
    button.innerText = 'Eliminar'
    div.appendChild(p)
    div.append(button)
    div.classList.add('alert')
    div.classList.add('success')
    div.addEventListener('click', changeColor)
    return div
}
const changeColor = (e) => {
    const cDiv = e.target
    if(cDiv.classList.contains('success')) {
        cDiv.classList.remove('success')
        cDiv.classList.add('warning')
    } else if (cDiv.classList.contains('warning')){
        cDiv.classList.remove('warning')
        cDiv.classList.add('danger')
    } else if (cDiv.classList.contains('danger')){
        cDiv.classList.remove('danger')
        cDiv.classList.add('success')
    }
}

// btnAgregar.addEventListener('click', addTarea)
myForm.addEventListener('submit', (e) => {
    e.preventDefault()
    createTarea()
})
