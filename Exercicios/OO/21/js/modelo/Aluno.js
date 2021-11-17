"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
const Pessoa_1 = __importDefault(require("./Pessoa"));
class Aluno extends Pessoa_1.default {
    constructor(Nome, Idade, Sexo, RA) {
        super(Nome, Idade, Sexo);
        this.RA = RA;
        this.Emprestimos = [];
    }
    RealizarEmprestimo() {
    }
}
exports.Aluno = Aluno;
