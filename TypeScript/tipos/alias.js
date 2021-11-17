"use strict";
let funcionario2 = {
    supervisores: ['maria', 'foda'],
    baterPontos(hora) {
        if (hora <= 8) {
            return 'dentro dohorário';
        }
        else {
            return 'fora do horario';
        }
    }
};
console.log(funcionario2.supervisores);
console.log(funcionario2.baterPontos(8));
