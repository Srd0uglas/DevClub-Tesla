// indo até o html, buscando a classe "form" e guardando na variável "formulario"
let formulario = document.querySelector(".form")

function aparecerForm(){
    // por padrão ele é left -50(sumir) e a funcção vai mudar para 50% (aparecer)
    formulario.style.left = "50%"
}

function desapareceForm(){
     formulario.style.left = "-50%"
}
