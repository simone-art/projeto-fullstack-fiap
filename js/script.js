// formulario-regístrese//

const form = document.getElementById("form");
const adicioneNome = document.getElementById("adicioneNome");
const adicioneEmail = document.getElementById("adicioneEmail");
const adicioneCpf = document.getElementById("adicioneCpf");
const adicioneEndereco = document.getElementById("adicioneEndereco");
const adicioneSenha = document.getElementById("adicioneSenha");
const confirmeSenha = document.getElementById("confirmeSenha");
const alertas = document.getElementById("alertas");

form.addEventListener("submit", e=>{
    e.preventDefault()
    let regerxEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(adicioneNome.value.length <2){
        alertas += `O nome não é válido <br>`
    }
    console.log("adicioneNome.value.length");

    if(!regerxEmail.test(adicioneEmail.value)){
        alertas += `O email não é válido <br>`
    }

    if(adicioneCpf.value.length < 11){
         alertas += `O CPF não é válido <br>`
    }

    if(adicioneEndereco.value.length < 5){
         alertas += `O endereço não é válido <br>`

    }

    if(adicioneSenha.value.length < 8){
         alertas += `A senha não é válida <br>`
    }

    if(confirmeSenha.value.length < 8){
        alertas += `Senha não foi confirmada <br>`
    }

    //BUTTON ENVIAR//

    let btnEnviar = document.getElementById("botaoEnviar")

    btnEnviar.addEventListener("click", function (e){
    evento.preventDefault();
    })
    console.log("clicou") 

})

// adicioneNome.addEventListener("click", function(evento){
//     evento.preventDefault();
//     if (adicioneNome.value.trim() == ""){
//         adicioneNome.setAttribute("placeholder","Por favor, digite o seu nome");
//     } else {
//         adicioneNome.setAttribute("placeholder", " ")
//     }
// })

// adicioneSobrenome.addEventListener("click", function(evento){
//     evento.preventDefault();
//     if (adicioneSobrenome.value.trim() == ""){
//         adicioneSobrenome.setAttribute("placeholder","Por favor, digite o seu sobrenome");
//     }
// })



// adicioneCpf.addEventListener("click", function(evento){
//     evento.preventDefault();
//     if (adicioneCpf.value.trim() == ""){
//         adicioneCpf.setAttribute("placeholder","Por favor, digite o seu CPF");
//     }
// })

// adicioneEndereco.addEventListener("click", function(evento){
//     evento.preventDefault();
//     if (adicioneEndereco.value.trim() == ""){
//         adicioneEndereco.setAttribute("placeholder","Por favor, digite o seu endereço");
//     }
// })

// adicioneSenha.addEventListener("click", function(evento){
//     evento.preventDefault();
//     if (adicioneSenha.value.trim() == ""){
//         adicioneSenha.setAttribute("placeholder","Por favor, insira a sua nova senha");
//     }    
// })

// confirmeSenha.addEventListener("click", function(evento){
//     evento.preventDefault();
//     if (confirmeSenha.value.trim() == ""){
//         confirmeSenha.setAttribute("placeholder","Por favor, confirme a sua nova senha");
//     }    
// })
