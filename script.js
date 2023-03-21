import checkComplete from "./componentes/checkTarea.js";
import deleteTaks from "./componentes/deleteTarea.js";

/*Inmediately invoked funtion expression IIFE =
Hacer más seguro el código -> lógica en función flecha que se ejecuta desde el inicio 
= no acceso desde la consola a las funciones (lógica)
*/ 
//(()=>{ 

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
    const content = ``;
    //task.innerHTML = content;
    list.appendChild(task);
    task.appendChild(taskContent);
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(taskTitle);
    task.appendChild(deleteTaks());
    task.classList.add("card");
    
}

btn.addEventListener("click", crearTarea);

//})();