"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Agenda_1 = require("./model/Agenda");
const Contato_1 = require("./model/Contato");
const Email_1 = require("./model/Email");
const Telefone_1 = require("./model/Telefone");
const TipoEndereco_1 = require("./enum/TipoEndereco");
const Endereco_1 = require("./model/Endereco");
const endereco1 = new Endereco_1.Endereco('45b', 'João Miguel da Veiga', 'Centro', 1311772, 'Tocos do Moji', 'MG', TipoEndereco_1.TipoEndereco.domestico);
const endereco2 = new Endereco_1.Endereco('600', 'João Miguel da Veiga', 'Centro', 1311772, 'Tocos do Moji', 'MG', TipoEndereco_1.TipoEndereco.domestico);
const telefone1 = new Telefone_1.Telefone(35, 997235615);
const telefone2 = new Telefone_1.Telefone(11, 999360815);
const email1 = new Email_1.Email('diego.veiga@totvs.com.br');
const email2 = new Email_1.Email('diegoroberto27@hotmail.com');
/**adiconando contato******/
const contato1 = new Contato_1.Contato('Diego', 25);
/**adiconando telefone******/
contato1.adicionarTelefone(telefone1);
contato1.adicionarTelefone(telefone2);
/***adiconando endereco */
contato1.adicionarEndereco(endereco1);
contato1.adicionarEndereco(endereco2);
/***adiconando email ***/
contato1.adicionarEmail(email1);
contato1.adicionarEmail(email2);
const agenda = new Agenda_1.Agenda();
agenda.adicionarContato(contato1);
console.log('agenda', agenda);
