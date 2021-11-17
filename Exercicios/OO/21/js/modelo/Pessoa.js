"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const guid_typescript_1 = require("guid-typescript");
class Pessoa {
    constructor(Nome, Idade, Sexo) {
        this.Id = this.id();
        this.Nome = Nome,
            this.Idade = Idade,
            this.Sexo = Sexo,
            this.Emprestimos = [];
    }
    id() {
        const id = guid_typescript_1.Guid.create().toString();
        return id;
    }
}
exports.default = Pessoa;
