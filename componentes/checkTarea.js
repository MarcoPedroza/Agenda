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

export default checkComplete;