let btn = document.getElementById('hambuid');
let cue = document.querySelector(".lista");

btn.addEventListener("click",agregar);

function agregar(){
    cue.classList.toggle("cambio");
}
