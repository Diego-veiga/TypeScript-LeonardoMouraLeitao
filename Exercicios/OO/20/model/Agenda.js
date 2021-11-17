"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Agenda = void 0;
const guid_typescript_1 = require("guid-typescript");
class Agenda {
    constructor() {
        this.Id = this.id();
        this.Contatos = [];
    }
    id() {
        const id = guid_typescript_1.Guid.create().toString();
        return id;
    }
    adicionarContato(contato) {
        let exist = this.VerificaExistencia(this.Contatos, contato);
        if (exist) {
            throw Error('Endereco ja cadastrado');
        }
        else {
            this.Contatos.push(contato);
        }
    }
    VerificaExistencia(lista, elemento) {
        let elementoExistente = lista.indexOf(elemento);
        if (elementoExistente === -1)
            return false;
        return true;
    }
}
exports.Agenda = Agenda;
