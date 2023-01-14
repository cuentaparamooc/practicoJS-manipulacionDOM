const h1 = document.querySelector('h1');
const form = document.querySelector("#form");
const input1 = document.querySelector('#digito1');
const input2 = document.querySelector('#digito2');
const btnCalcular = document.querySelector("#btnCalcular");
const result = document.querySelector('#result');

form.addEventListener("submit", sumarInputValues)

function sumarInputValues(event){
    h1.innerText = ("Oye te hablo desde la función");
    event.preventDefault();
    const sumaDigitos = parseInt(input1.value) + parseInt(input2.value);
    result.innerText = input1.value + " + " + input2.value + " es igual a " + sumaDigitos;
}