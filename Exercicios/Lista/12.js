"use strict";
const numeros = [];
function random(min = 0, max = 1000) {
    return Math.floor(Math.random() * (max - min) + min);
}
for (let i = 0; i <= 99; i++) {
    numeros.push(random());
}
function ordenaVetor(vetor) {
    return vetor.sort();
}
console.log(ordenaVetor(numeros));
