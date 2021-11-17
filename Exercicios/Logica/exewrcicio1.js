"use strict";
class Pessoaa {
    constructor() {
        this.nome = '';
        this.altura = 0;
    }
    set Nome(nome) {
        if (nome.length > 3) {
            this.nome = nome;
        }
        else {
            throw Error('Nome deve ter mais de 3 caracteres');
        }
    }
    get Nome() {
        return this.nome.toUpperCase();
    }
    set DataNascimento(data) {
        if (data < new Date()) {
            this.dataNascimento = data;
        }
        else {
            throw new Error('A data informada deve ser uma data menor do que hoje');
        }
    }
    get DataNascimento() {
        return this.dataNascimento;
    }
    set Altura(altura) {
        this.altura = altura;
    }
    get Altura() {
        return this.altura;
    }
    Descrever() {
        return `Meu nome é ${this.Nome}, tenho ${this.RetonaIdade()} anos  e tanho ${this.Altura} de altura `;
    }
    RetonaIdade() {
        const hoje = new Date();
        console.log(hoje.getFullYear());
        console.log(this.dataNascimento);
        console.log(this.dataNascimento.getFullYear());
        return hoje.getFullYear() - this.dataNascimento.getFullYear();
    }
}
const pessoaa1 = new Pessoaa();
pessoaa1.Nome = 'Diego';
pessoaa1.DataNascimento = new Date(1996, 2, 29);
pessoaa1.Altura = 1.60;
console.log(pessoaa1.Descrever());
