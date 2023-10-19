// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

/*Forma padrão popup para o campo email em forma de comentário
// Mostrar popup de campo obrigatório
usernameInput.addEventListener('focus', function () {
    usernameLabel.classList.add('required-popup')
})

// Ocultar popup de campo obrigatório
usernameInput.addEventListener('blur', function () {
    usernameLabel.classList.remove('required-popup')
})*/

//Forma reduzida para uma função popup para o campo email em forma de comentário
function mostrarPopupUserName(input, label) {
// Mostrar popup de campo obrigatório
usernameInput.addEventListener('focus', function () {
    usernameLabel.classList.add('required-popup')
})

// Ocultar popup de campo obrigatório
usernameInput.addEventListener('blur', function () {
    usernameLabel.classList.remove('required-popup')
})
}

mostrarPopupUserName(usernameInput, usernameLabel);

// Validar valor do input USERNAME
usernameInput.addEventListener('change', function (event) {
    let valor = event.target.value;
    console.log(valor);

    if(valor.length < 3) {
        //estilos dinâmicos caso o valor não seja válido
        usernameInput.classList.remove('correct');
        usernameInput.classList.add('error');
        usernameInput.innerText = 'Seu username deve ter 3 ou mais caracteres';
        usernameHelper.classList.add('visible');

    } else {
        //estilos dinâmicos caso o valor seja válido
        usernameInput.classList.remove('error');
        usernameHelper.classList.remove('visible');
        usernameInput.classList.add('correct');
    }
    
})

// ---------- VALIDAÇÃO EMAIL ---------- //
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

/*Forma padrão popup para o campo email em forma de comentário
// Mostrar popup de campo obrigatório
emailInput.addEventListener('focus', function () {
    emailLabel.classList.add('required-popup')
})

// Ocultar popup de campo obrigatório
email.addEventListener('blur', function () {
    emailLabel.classList.remove('required-popup')
})*/

//Forma reduzida para uma função popup para o campo email em forma de comentário
function mostrarPopupEmail (input, label) {
// Mostrar popup de campo obrigatório
    emailInput.addEventListener('focus', function () {
        emailLabel.classList.add('required-popup')
    })
    
// Ocultar popup de campo obrigatório
    email.addEventListener('blur', function () {
        emailLabel.classList.remove('required-popup')
    })

}

mostrarPopupEmail(emailInput, emailLabel);

// Validar valor do input EMAIL
emailInput.addEventListener('change', function (event) {
    let valor = event.target.value;
    console.log(valor);

    if(valor.includes('@') && valor.includes('.')) {
       emailInput.classList.remove ('error');
       emailHelper.classList.remove ('visible');
       emailInput.classList.add ('correct'); 
    }
    else {
       emailInput.classList.remove ('correct');
       emailInput.classList.add ('error');
       emailHelper.innerText = 'Email inválido';
       emailHelper.classList.add ('visible'); 
    }

})