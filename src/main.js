//================ declarando variáveis para os componentes da página ================//

let confirmButton = document.querySelector('#confirm');

let activeStates = document.querySelector('.active-states')
let completeState = document.querySelector('.complete-state');

let nomeInput = document.querySelector('#nome-input');
let nomeCartão = document.querySelector('#nome-cartão');

let númeroInput = document.querySelector('#número-input');
let númeroCartão = document.querySelector('#número-cartão');

let mesInput = document.querySelector('#mes-input');
let anoInput = document.querySelector('#ano-input');
let dataCartão = document.querySelector('#data-cartão');

let cvcInput = document.querySelector('#cvc-input');
let cvcCartão = document.querySelector('#cvc-cartão');

let span = document.getElementsByTagName('span');

//================ funções para enviar o formulário ================//

confirmButton.addEventListener("click", 
    function () {
        if(validarForm()) {
            resetCard();
            activeStates.style.display = "none"; 
            completeState.style.display = "flex"; 
        }
});
function resetCard() {
    nomeCartão.innerText = 'Jane Appleseed';
    númeroCartão.innerText = '0000 0000 0000 0000';
    dataCartão.innerText = '00/00';
    cvcCartão.innerText = '000';
}
function validarForm() {
    let vec = [validar(nomeInput, 0, 0),
               validar(númeroInput, 1, 19),
               validar(mesInput, 2, 2), 
               validar(anoInput, 2, 2), 
               validar(cvcInput, 3, 3)];
    if(vec.every(valor => valor === true))
        return true;
    return false;
}
function validar(input, index, min) {
    if(input.value === '') {
        input.style.cssText = "border-color: red;";
        span[index].innerText = 'Can\'t be blank';
        return false;
    }
    if(index !== 0 && !onlyNum(input.value)) {
        input.style.cssText = "border-color: red;";
        span[index].innerText = 'Wrong format, numbers only';
        return false;
    }
    if(index === 0 && !onlyLetters(input.value)) {
        input.style.cssText = "border-color: red;";
        span[index].innerText = 'Wrong format, letters only';
        return false;
    }
    if(input.value.length < min) {
        input.style.cssText = "border-color: red;";
        span[index].innerText = 'Too short';
        return false;
    }
    input.style.cssText = "border-color: hsl(212, 12%, 71%);";
    span[index].innerText = '';
    return true;
}
function onlyNum(string) {
    for(let char of string)
        if(char !== ' ' && isNaN(char))
            return false;
    return true;
}
function onlyLetters(string) {
    for(let char of string) 
        if(char !== ' ' && !char.match(/[a-zA-Z]/))
            return false;
    return true;
}

//================ funções para editar o cartão ================//

nomeInput.addEventListener("input", 
    function () {
        nomeCartão.innerText = nomeInput.value;
});
númeroInput.addEventListener("input", 
    function () {
        númeroCartão.innerText = númeroInput.value;
});
mesInput.addEventListener("input", 
    function () {
        dataCartão.innerText = mesInput.value + '/' + anoInput.value;
});
anoInput.addEventListener("input", 
    function () {
        dataCartão.innerText = mesInput.value + '/' + anoInput.value;
});
cvcInput.addEventListener("input", 
    function () {
        cvcCartão.innerText = cvcInput.value;
});