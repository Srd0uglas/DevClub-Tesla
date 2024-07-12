// indo até o html, buscando a classe "form" e guardando na variável "formulario"
let formulario = document.querySelector(".form")
let formulario2 = document.querySelector(".form2")

function aparecerForm(){
    // por padrão ele é left -50(sumir) e a funcção vai mudar para 50% (aparecer)
    formulario.style.left = "5%"
    
}

function desapareceForm(){
     formulario.style.left = "-50%"
}





function aparecerForm2(){
    formulario2.style.left = "67%"
}

function desapareceForm2(){
    formulario2.style.left = "-67%"
}
