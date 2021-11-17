"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emprestimo = void 0;
const guid_typescript_1 = require("guid-typescript");
class Emprestimo {
    constructor() {
        this.Id = this.id(),
            this.DataEmprestimo = new Date();
        this.itemEmprestimo = [];
    }
    id() {
        const id = guid_typescript_1.Guid.create().toString();
        return id;
    }
    getID() {
        return this.Id;
    }
    VerificaTitulo(item) {
        let existe;
        for (let emprestimo of this.itemEmprestimo) {
            if (emprestimo.Livro.getTituloLivro() === item.Livro.getTituloLivro()) {
                return existe = true;
            }
            else {
                return existe = false;
            }
        }
    }
    AddItemEmprestimo(item) {
        if (!this.VerificaTitulo(item)) {
            item.DataDevolucao();
            this.itemEmprestimo.push(item);
        }
    }
    RemoverItemEmprestimo(item) {
        const index = this.searchItemEmprestimo(item);
        if (index === -1) {
            return 'Item inexistente';
        }
        else {
            this.itemEmprestimo.slice(index, 1);
        }
    }
    searchItemEmprestimo(item) {
        const index = this.itemEmprestimo.indexOf(item);
        return index;
    }
}
exports.Emprestimo = Emprestimo;
