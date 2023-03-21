const deleteTaks = () =>{
    const borrar = document.createElement("i");
    borrar.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
    borrar.addEventListener("click", deleteComplete)
    return borrar;
}

const deleteComplete = (e) => {
    //console.log(e.target);
        //Saber cuál es el elemento padre
    //console.log(e.target.parentElement);
        //Borrar el padre (li)
    const parent = e.target.parentElement;
    parent.remove();
}

export default deleteTaks; 