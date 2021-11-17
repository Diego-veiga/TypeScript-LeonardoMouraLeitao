import { Agenda } from './model/Agenda';
import { Contato } from './model/Contato';
import { Email } from './model/Email';
import { Telefone } from './model/Telefone';
import { TipoEndereco } from './enum/TipoEndereco';
import { Endereco } from './model/Endereco';

const endereco1 = new Endereco('45b','João Miguel da Veiga','Centro',1311772,'Tocos do Moji', 'MG',TipoEndereco.domestico)
const endereco2 = new Endereco('600','João Miguel da Veiga','Centro',1311772,'Tocos do Moji', 'MG',TipoEndereco.domestico)

const telefone1 = new Telefone(35,997235615) 
const telefone2 = new Telefone(11,999360815) 


const email1 = new Email('diego.veiga@totvs.com.br')
const email2 = new Email('diegoroberto27@hotmail.com')


/**adiconando contato******/
const contato1 =  new Contato('Diego', 25)

/**adiconando telefone******/
contato1.adicionarTelefone(telefone1)
contato1.adicionarTelefone(telefone2)

/***adiconando endereco */
contato1.adicionarEndereco(endereco1)
contato1.adicionarEndereco(endereco2)

/***adiconando email ***/
contato1.adicionarEmail(email1)
contato1.adicionarEmail(email2)




const agenda = new Agenda()
 agenda.adicionarContato(contato1)

 console.log('agenda',agenda)

