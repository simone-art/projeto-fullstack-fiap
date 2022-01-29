// formulario-regístrese//

adicioneNome.addEventListener("click", function(evento){
    evento.preventDefault();
    if (adicioneNome.value.trim() == ""){
        adicioneNome.setAttribute("placeholder","Por favor, digite o seu nome");
    } else {
        adicioneNome.setAttribute("placeholder", " ")
    }
})

adicioneSobrenome.addEventListener("click", function(evento){
    evento.preventDefault();
    if (adicioneSobrenome.value.trim() == ""){
        adicioneSobrenome.setAttribute("placeholder","Por favor, digite o seu sobrenome");
    }
})



adicioneCpf.addEventListener("click", function(evento){
    evento.preventDefault();
    if (adicioneCpf.value.trim() == ""){
        adicioneCpf.setAttribute("placeholder","Por favor, digite o seu CPF");
    }
})

adicioneEndereco.addEventListener("click", function(evento){
    evento.preventDefault();
    if (adicioneEndereco.value.trim() == ""){
        adicioneEndereco.setAttribute("placeholder","Por favor, digite o seu endereço");
    }
})

adicioneSenha.addEventListener("click", function(evento){
    evento.preventDefault();
    if (adicioneSenha.value.trim() == ""){
        adicioneSenha.setAttribute("placeholder","Por favor, insira a sua nova senha");
    }    
})

confirmeSenha.addEventListener("click", function(evento){
    evento.preventDefault();
    if (confirmeSenha.value.trim() == ""){
        confirmeSenha.setAttribute("placeholder","Por favor, confirme a sua nova senha");
    }    
})

//BUTTON ENVIAR//

let btnEnviar = document.getElementById("form")

btnEnviar.addEventListener("click", function (e){
    evento.preventDefault();
})
console.log("clicou") 