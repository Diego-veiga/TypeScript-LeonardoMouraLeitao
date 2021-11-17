"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contato = void 0;
const guid_typescript_1 = require("guid-typescript");
class Contato {
    constructor(Nome, Idade) {
        this.Id = this.id();
        this.Nome = Nome,
            this.Idade = Idade,
            this.Telefone = [],
            this.Email = [],
            this.Enderecos = [];
    }
    id() {
        const id = guid_typescript_1.Guid.create().toString();
        return id;
    }
    adicionarTelefone(telefone) {
        let exist = this.VerificaExistencia(this.Telefone, telefone);
        if (exist) {
            throw Error('Contato telefonico ja cadastrado');
        }
        else {
            this.Telefone.push(telefone);
        }
    }
    adicionarEmail(email) {
        let exist = this.VerificaExistencia(this.Email, email);
        if (exist) {
            throw Error('Email ja cadastrado');
        }
        else {
            this.Email.push(email);
        }
    }
    adicionarEndereco(endereco) {
        let exist = this.VerificaExistencia(this.Enderecos, endereco);
        if (exist) {
            throw Error('Endereco ja cadastrado');
        }
        else {
            this.Enderecos.push(endereco);
        }
    }
    VerificaExistencia(lista, elemento) {
        let elementoExistente = lista.indexOf(elemento);
        if (elementoExistente === -1)
            return false;
        return true;
    }
}
exports.Contato = Contato;
