"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
const guid_typescript_1 = require("guid-typescript");
class Email {
    constructor(Email) {
        this.Id = this.id();
        this.Email = Email;
    }
    id() {
        const id = guid_typescript_1.Guid.create().toString();
        return id;
    }
}
exports.Email = Email;
