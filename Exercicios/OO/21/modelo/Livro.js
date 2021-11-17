"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
const guid_typescript_1 = require("guid-typescript");
class Livro {
    constructor(Titulo, DataLançamento, numeroPaginas, quantidadeEstoque, diasEmprestimo) {
        this.Id = this.id(),
            this.Titulo = Titulo,
            this.DataLançamento = DataLançamento,
            this.numeroPaginas = numeroPaginas,
            this.quantidadeEstoque = quantidadeEstoque,
            this.diasEmprestimo = diasEmprestimo;
    }
    id() {
        const id = guid_typescript_1.Guid.create().toString();
        return id;
    }
    getID() {
        return this.Id;
    }
    baixarEstoque() {
        this.quantidadeEstoque -= 1;
    }
    getTituloLivro() {
        return this.Titulo;
    }
    DiasEmprestimo() {
        return this.diasEmprestimo;
    }
}
exports.Livro = Livro;
