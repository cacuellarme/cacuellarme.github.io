let ojo = document.getElementById("ojo");
let input = document.getElementById("input")

ojo.addEventListener("click", function(){
    if(input.type == "password"){
        input.type = "text"
        ojo.style.opacity = 0.8
    }
    else{
        input.type = "password"
        ojo.style.opacity = 0.2
    }
})