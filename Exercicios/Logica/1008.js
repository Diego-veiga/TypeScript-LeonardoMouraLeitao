"use strict";
class Funcionariooo {
    constructor(Id, SalarioHora, HorasTrabalhadas) {
        this.Id = Id;
        this.SalarioHora = SalarioHora;
        this.HorasTrabalhadas = HorasTrabalhadas;
        this.id = 0;
        this.salarioHora = 0;
        this.horasTrabalhadas = 0;
        this.id = Id;
        this.salarioHora = SalarioHora;
        this.horasTrabalhadas = HorasTrabalhadas;
    }
    calculaSalario() {
        const salarioFinal = this.salarioHora * this.horasTrabalhadas;
        return salarioFinal;
    }
    apresenta() {
        return ` NUMBER = ${this.id} SALARY ${this.calculaSalario().toFixed(2)}`;
    }
}
const fun1 = new Funcionariooo(25, 100, 5.5);
console.log(fun1.apresenta());
