"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endereco = void 0;
const guid_typescript_1 = require("guid-typescript");
class Endereco {
    constructor(numeroCasa, rua, bairro, cep, cidade, uf, tipoendereco) {
        this.Id = this.id();
        this.NumeroCasa = numeroCasa,
            this.Rua = rua,
            this.Bairro = bairro,
            this.CEP = cep,
            this.Cidadde = cidade,
            this.UF = uf,
            this.TipoEndereco = tipoendereco;
    }
    id() {
        const id = guid_typescript_1.Guid.create().toString();
        return id;
    }
}
exports.Endereco = Endereco;
