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

abstract class Carro1<M>{
    public  kmRodado:M
    public  consumoCombustivel:M
    constructor(public KMRodado:M, public ConsumoCombustivel:M) {
        this.kmRodado=KMRodado
        this.consumoCombustivel= ConsumoCombustivel
    }
    abstract calculaConsumoPorLitro():M
}

class Carro2 extends Carro1<number> {
    public  kmRodado:number
    public  consumoCombustivel:number 
    super(){}
    public calculaConsumoPorLitro():number{
        return this.kmRodado / this.consumoCombustivel
    }
}

const c3 = new Carro2(500.00,35.00)
console.log(c3.calculaConsumoPorLitro())

