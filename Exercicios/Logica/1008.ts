class Funcionariooo{
    private id:number=0
    private salarioHora:number=0
    private horasTrabalhadas:number=0

    constructor(public Id:number, public SalarioHora:number, public HorasTrabalhadas:number){
        this.id = Id
        this.salarioHora = SalarioHora
        this.horasTrabalhadas = HorasTrabalhadas
    }
     

    calculaSalario():number{
       const salarioFinal = this.salarioHora * this.horasTrabalhadas
      return salarioFinal
    }
    apresenta():string{
        return ` NUMBER = ${this.id } SALARY ${this.calculaSalario().toFixed(2)}`
 
    }


}


const fun1 =  new Funcionariooo(25,100,5.5)
 console.log(fun1.apresenta())