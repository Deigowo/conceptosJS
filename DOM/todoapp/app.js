const inputTarea = document.getElementById('tareatxt')
const btnAgregar = document.getElementById('addTarea')
const divTareas = document.getElementById('tareas')
const myForm = document.querySelector('#myForm')

let arrayTareas = localStorage.getItem('tareas')
                    ? JSON.parse(localStorage.getItem('tareas').split(','))
                    : []

addTarea.addEventListener('click', () => {
    const tarea = inputTarea.value
    inputTarea.value = ''
    arrayTareas.push( 
        {
            tarea: tarea,
            estado: 'danger',
            id: Math.floor(Math.random() * 10000)
        }
    )
    construyeDivs()
    localStorage.setItem('tareas', JSON.stringify(arrayTareas))
})

const construyeDivs = () => {
    divTareas.innerHTML = ''
    arrayTareas.forEach(tarea => {
        divTareas.appendChild(createTarea(tarea))
    })
}

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

    const id = tarea.id

    button.addEventListener('click', () => {

        arrayTareas = arrayTareas.filter(tarea => tarea.id !== id)
        div.remove()
        localStorage.setItem('tareas', JSON.stringify(arrayTareas))
    })

    p.innerText = tarea.tarea
    button.innerText = 'Eliminar'
    div.appendChild(p)
    div.append(button)
    div.classList.add('alert')
    div.classList.add(tarea.estado)
    div.setAttribute('data-id', tarea.id)
    div.addEventListener('click', changeColor)
    return div
}

const changeColor = (e) => {
    const cDiv = e.target
    const id = cDiv.getAttribute('data-id')
    const find = arrayTareas.findIndex(tarea => tarea.id == id)
    if(cDiv.classList.contains('danger')) { 
        cDiv.classList.remove('danger')
        cDiv.classList.add('warning')
        arrayTareas[find].estado = 'warning'
    } else if (cDiv.classList.contains('warning')){
        cDiv.classList.remove('warning')
        cDiv.classList.add('success')
        arrayTareas[find].estado = 'success'
        
    } else if (cDiv.classList.contains('success')){
        cDiv.classList.remove('success')
        cDiv.classList.add('danger')
    }
    localStorage.setItem('tareas', JSON.stringify(arrayTareas))
}

construyeDivs()

// btnAgregar.addEventListener('click', addTarea)
myForm.addEventListener('submit', (e) => {
    e.preventDefault()
    construyeDivs()
})
