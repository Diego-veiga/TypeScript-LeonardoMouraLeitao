"use strict";
const formulario = document.querySelector('.formulario');
const resultado = document.querySelector('.resultado');
const inverter = document.querySelector('.inverter');
const nomes = [];
formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    let inputNome = document.querySelector('.nome');
    let nome = inputNome.value;
    if (ValidaCampo(nome)) {
        nomes.push(nome);
    }
    else {
        alert('Por favor preencha o campo');
    }
    console.log(nomes);
    inputNome.nodeValue = " ";
});
inverter.addEventListener('click', function (e) {
    inverterVetor(nomes);
});
function MostraResultado(vetorInvertido) {
    resultado.innerHTML = '';
    console.log('vetorInvertido', vetorInvertido);
    for (let v of vetorInvertido) {
        console.log('v', v);
        resultado.innerHTML += ` ${v} `;
    }
}
function inverterVetor(vetor) {
    console.log('vetor', vetor);
    const vetorInvertido = vetor.reverse();
    MostraResultado(vetorInvertido);
}
function ValidaCampo(campo) {
    if (campo) {
        return true;
    }
    else {
        return false;
    }
}
