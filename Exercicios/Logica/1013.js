"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function MaiorNumero(params) {
    return Math.max(...params);
}
const n1 = 2;
const n2 = 7;
const n3 = 15;
const numeros = [1, 2, 3];
console.log(MaiorNumero([n1, n2, n3]));
