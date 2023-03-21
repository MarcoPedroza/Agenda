const btn= document.querySelector("[data-form-btn]");

const crearTarea = (e) => {
    e.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    input.value = "";
    const taskContent = document.createElement("div");
    const taskTitle = document.createElement("span");
    taskTitle.classList.add("task");
    taskTitle.innerText = value; 
    const content = `
    <i class="fas fa-trash-alt trashIcon icon"></i>`
    //task.innerHTML = content;
    list.appendChild(task);
    task.appendChild(taskContent);
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(taskTitle);
    task.classList.add("card");
}

btn.addEventListener("click", crearTarea);

const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", taskComplete);
    return i;
}

const taskComplete = (e) =>{
    //console.log("Complete Taks");
    //console.log(e.target); //Target muestra elemento sobre el que se hace clic
    const elementoSeleccionado = e.target;
    //Cambiar clase al elemento seleccionado (Libreria Font awesome)
        //elementoSeleccionado.classList.add("fas");
    //Añadir clase que pone al icono en azul(CSS)
        //elementoSeleccionado.classList.add("completeIcon");
    //Eliminar clase anterior del elemento (Libreria Font awesome)
        //elementoSeleccionado.classList.remove("far");
    //Función para verificar si existe o no la clase (pone o quita) para efecto seleccionar o desleccionar
    elementoSeleccionado.classList.toggle("fas");
    elementoSeleccionado.classList.toggle("completeIcon");
    elementoSeleccionado.classList.toggle("far");
}