"use strict";
class equacaoSegundoGrau {
    constructor(a, b, c) {
        this.delta = 0;
        this.x1 = 0;
        this.x2 = 0;
        this.a = a;
        this.b = b;
        this.c = c;
    }
    calculaDelta() {
        this.delta = Math.pow(this.b, 2) - 4 * this.a * this.c;
    }
    formuladeBascara() {
        this.x1 = (-this.b + Math.sqrt(this.delta)) / (2 * this.a);
        this.x2 = (-this.b - Math.sqrt(this.delta)) / (2 * this.a);
    }
    get retornaDelta() {
        return this.delta;
    }
    get retornax1() {
        return this.x1;
    }
    get retornax2() {
        return this.x2;
    }
}
const e1 = new equacaoSegundoGrau(5, -3, -2);
e1.calculaDelta();
e1.formuladeBascara();
console.log('x1', e1.retornax1);
console.log('x2', e1.retornax2);
console.log(e1.retornaDelta);
