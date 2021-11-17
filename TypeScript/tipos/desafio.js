"use strict";
let funcionario = {
    supervisores: ['ana', 'manuel'],
    baterPonto(hora) {
        if (hora < 8) {
            return 'dentro dohorário';
        }
        else {
            return 'fora do horario';
        }
    }
};
let meufuncionario = funcionario;
meufuncionario = {
    supervisores: ['tia', 'mãe'], baterPonto(hora) {
        return `ponto batido as ${hora}`;
    }
};
console.log(meufuncionario.supervisores);
console.log(meufuncionario.baterPonto(10));
