"use strict";
class Elevador {
    constructor(Capacidade, numeroAndares) {
        this.Capacidade = Capacidade;
        this.numeroAndares = numeroAndares;
        this.andarAtual = 0;
        this.totalAndares = 0;
        this.capacidade = 0;
        this.pessoasPresentes = 0;
        this.capacidade = Capacidade;
        this.totalAndares = numeroAndares;
    }
    entra() {
        if (this.pessoasPresentes < this.capacidade) {
            return this.pessoasPresentes += 1;
        }
        else {
            return 'Elavdor lotado';
        }
    }
    sai() {
        if (this.pessoasPresentes > 0) {
            return this.pessoasPresentes -= 1;
        }
        else {
            return 'não existe nenhuma pessoa no elevador ';
        }
    }
    subir() {
        if (this.andarAtual === this.totalAndares) {
            return 'ja esta no ultimo andar';
        }
        else {
            return this.andarAtual += 1;
        }
    }
    descer() {
        if (this.andarAtual === 0) {
            return ` o elevador ja esta no terreo`;
        }
        else {
            return this.andarAtual -= 1;
        }
    }
}
const ele = new Elevador(3, 5);
console.log(ele.entra());
console.log(ele.entra());
console.log(ele.entra());
console.log(ele.entra());
