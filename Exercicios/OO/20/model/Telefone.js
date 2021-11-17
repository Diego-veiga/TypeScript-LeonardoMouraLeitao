"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefone = void 0;
const guid_typescript_1 = require("guid-typescript");
class Telefone {
    constructor(DDD, Numero) {
        this.Id = this.id();
        this.DDD = DDD,
            this.Numero = Numero;
    }
    id() {
        const id = guid_typescript_1.Guid.create().toString();
        return id;
    }
}
exports.Telefone = Telefone;
