"use strict";
let n1 = 0;
let n2 = 0;
const calcMedia = (nota, peso) => {
    return (nota * peso) / 10;
};
const calMediaFinal = (m1, m2) => {
    return ((m1 + m2) * 10) / 11;
};
const media1 = calcMedia(5, 3.5);
const media2 = calcMedia(7.1, 7.5);
console.log('Media1', media1);
console.log('Media2', media2);
console.log(calMediaFinal(media1, media2));
class Nota {
    constructor() {
        this._nota1 = 0;
        this._nota2 = 0;
        this._peso1 = 0;
        this._peso2 = 0;
        this.Media1 = 0;
        this.Media2 = 0;
        this.notaFinal = 0;
    }
    set nota1(valor) {
        if (valor <= 10) {
            this.nota1 = valor;
        }
    }
    get nota1() {
        return this._nota1;
    }
    set nota2(valor) {
        if (valor <= 10) {
            this.nota2 = valor;
        }
    }
    get nota2() {
        return this._nota2;
    }
}
