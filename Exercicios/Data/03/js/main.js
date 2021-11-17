"use strict";
const form = document.querySelector('.formulario');
const calcular = document.querySelector('.btn-calcular');
const numeros = [];
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const numero = Number(document.querySelector('.numero').value);
    numeros.push(numero);
    console.log(numeros);
    return numeros;
});
calcular.addEventListener('click', function () {
    const NumeroMaior = maiorNumero(numeros);
    adicionaResultado(NumeroMaior);
});
function adicionaResultado(valor) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = ` o maior numero digitado é: ${valor}`;
}
function maiorNumero(valores) {
    let maior = 0;
    for (let valor of valores) {
        if (valor > maior) {
            maior = valor;
        }
    }
    return maior;
}
