"use strict";
/*interface Icarro<M extends number>{
    kmRodado:M
    consumoCombustivel:M
     
    calculaConsumoPorLitro():M
    
}


class  Carrooo implements Icarro<number> {
    public kmRodado:number=0
    public consumoCombustivel:number=0
    constructor(public KMRodado:number=0, public ConsumoCombustivel:number=0) {
        this.kmRodado=KMRodado
        this.consumoCombustivel= ConsumoCombustivel
    }

    calculaConsumoPorLitro():number{
        return this.kmRodado / this.consumoCombustivel
    }
}

const c = new Carrooo(500.00,35.00)
console.log(c.calculaConsumoPorLitro())
*/
class Carro1 {
    constructor(KMRodado, ConsumoCombustivel) {
        this.KMRodado = KMRodado;
        this.ConsumoCombustivel = ConsumoCombustivel;
        this.kmRodado = KMRodado;
        this.consumoCombustivel = ConsumoCombustivel;
    }
}
class Carro2 extends Carro1 {
    super() { }
    calculaConsumoPorLitro() {
        return this.kmRodado / this.consumoCombustivel;
    }
}
const c3 = new Carro2(500.00, 35.00);
console.log(c3.calculaConsumoPorLitro());
