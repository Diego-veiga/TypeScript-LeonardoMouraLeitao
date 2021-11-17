"use strict";
const numeros1 = [];
const numeros2 = [];
function random(min = 0, max = 1000) {
    return Math.floor(Math.random() * (max - min) + min);
}
function GeraListaAleatoria(vetor) {
    for (let i = 0; i < 10; i++) {
        vetor.push(random());
    }
    return vetor;
}
function OrdernaLista(lista) {
    return lista.sort();
}
function juntaLista(lista1, lista2) {
    let newLista;
    newLista = lista1.concat(lista1).sort();
    return newLista.sort();
}
function Final(lista1, lista2) {
    GeraListaAleatoria(lista1);
    GeraListaAleatoria(lista2);
    OrdernaLista(lista1);
    OrdernaLista(lista2);
    const vetorFinal = juntaLista(numeros1, numeros2);
    return vetorFinal;
}
console.log(Final(numeros1, numeros2));
