// formulario-regístrese//

const form = document.getElementById("form");
const inputs = document.querySelectorAll("#form input");

const expresoes = {
	adicioneNome: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    adicioneEmail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    adicioneCpf: /^\d{11}$/, // 11 digitos.
    adicioneSenha: /^.{4,12}$/, // 4 a 12 digitos.
	confirmeSenha: /^.{4,12}$/ // 4 a 12 digitos.
	
}



const adicioneNome = document.getElementById("adicioneNome");
const adicioneEmail = document.getElementById("adicioneEmail");
const adicioneCpf = document.getElementById("adicioneCpf");
const adicioneEndereco = document.getElementById("adicioneEndereco");
const adicioneSenha = document.getElementById("adicioneSenha");
const confirmeSenha = document.getElementById("confirmeSenha");
const alertas = document.getElementById("alertas");


const validarCadastro = (e) => {
    // console.log("Executando");
   // console.log(e.target.name);
    switch (e.target.name) {
        case "adicioneNome":
        //console.log("Funciona!");
        if(expresoes.adicioneNome.test(e.target.value)){
             document.getElementById("grupo_nome_email").classList.remove("formulario__grupo-incorrecto")
             document.getElementById("grupo_nome_email").classList.add("formulario__grupo-correcto")

        }else{
            document.getElementById("grupo_nome_email").classList.add("formulario__grupo-incorrecto");
        }
        break;

        case "adicioneEmail":;
       
        break;

        case "adicioneCpf":;
        
        break;

        case "adicioneEndereco":;
        
        break;

        case "adicioneSenha":;
        
        break;

        case "confirmeSenha":;
        
        break;
    }

}
 
inputs.forEach((input) => {
    input.addEventListener('keyup', validarCadastro);
    input.addEventListener('blur', validarCadastro);
    console.log('Tecla Levantada');
});

form.addEventListener('submit', (e)=> {
    e.preventDefault();
});



// form.addEventListener('submit', (e)=>{
//     e.preventDefault()
//     let alertas = "";
//     let entrar = false;
//     let regerxEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
//     alertas.innerHTML = "";
//     if(adicioneNome.value.length <2){
//         alertas += `O nome não é válido <br>`
//         entrar = true;
//     }
//     console.log("adicioneNome.value.length");

//     if(!regerxEmail.test(adicioneEmail.value)){
//         alertas += `O email não é válido <br>`
//         entrar = true;
//     }

//     if(adicioneCpf.value.length < 11){
//          alertas += `O CPF não é válido <br>`
//          entrar = true;
//     }

//     if(adicioneEndereco.value.length < 5){
//          alertas += `O endereço não é válido <br>`
//          entrar = true;

//     }

//     if(adicioneSenha.value.length < 8){
//          alertas += `A senha não é válida <br>`
//          entrar = true;
//     }

//     if(confirmeSenha.value.length < 8){
//         alertas += `Senha não foi confirmada <br>`
//         entrar = true;
//     }

//     if(entrar){
//         alertas.innerHTML = alertas;
//     }else{
//         alertas.innerHTML = "Enviado";
//     }

//     //BUTTON ENVIAR//

//     let btnEnviar = document.getElementById("botaoEnviar");

//     btnEnviar.addEventListener("click", function (e){
//         e.preventDefault();
//     })
//     console.log("clicou") 

// })

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
