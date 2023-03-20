const btn= document.querySelector("[data-form-btn]");

const crearTarea = (e) => {
    e.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    input.value = "";
    const content = `<div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>`
    task.innerHTML = content;
    list.appendChild(task);
    task.classList.add("card");
}

btn.addEventListener("click", crearTarea);