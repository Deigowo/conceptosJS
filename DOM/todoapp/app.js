const inputTarea = document.getElementById('tareatxt')
const btnAgregar = document.getElementById('addTarea')
const divTareas = document.getElementById('tareas')

addTarea.addEventListener('click', () => {
    const tarea = inputTarea.value
    divTareas.appendChild(createTarea(tarea))
    inputTarea.value = ''
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
    // button.addEventListener('click', deleteItem)
    div.appendChild(p)
    div.append(button)
    return div

}
