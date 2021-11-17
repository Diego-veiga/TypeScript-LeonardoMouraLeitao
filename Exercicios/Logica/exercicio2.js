"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoaaa {
    constructor(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
}
class Agenda {
    constructor() {
        this.pessoas = new Array();
    }
    armazenarPessoa(pessoa) {
        this.pessoas.push(pessoa);
    }
    removerPessoa(nome) {
        const posicao = this.buscaPessoa(nome);
        if (posicao) {
            this.pessoas.splice(posicao, 1);
        }
        else {
            console.log('Item não encontrado');
        }
    }
    buscaPessoa(nome) {
        for (let index = 0; index < this.pessoas.length; index++) {
            if (this.pessoas[index].nome === nome) {
                return index;
            }
        }
    }
    imprimiAgenda() {
        console.log(this.pessoas);
    }
    imprimirPessoa(index) {
        console.log(this.pessoas[index]);
    }
}
const ppp = new Pessoaaa('diego', 27, 1.70);
const pppp = new Pessoaaa('dom', 33, 1.70);
const pppppp = new Pessoaaa('follman', 42, 1.70);
const ppppp = new Pessoaaa('tiago', 35, 1.70);
const agenda = new Agenda();
agenda.armazenarPessoa(ppp);
agenda.armazenarPessoa(pppp);
agenda.armazenarPessoa(pppppp);
agenda.armazenarPessoa(ppppp);
agenda.imprimiAgenda();
console.log(agenda.buscaPessoa('tiago'));
agenda.removerPessoa('follman');
agenda.imprimiAgenda();
agenda.imprimirPessoa(2);
