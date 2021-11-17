class equacaoSegundoGrau{
    public a:number;
    public b:number;
    public c:number;
    private delta:number=0
    private x1:number=0;
    private x2:number=0
    constructor(a:number, b:number, c:number){
        this.a = a;
        this.b = b;
        this.c =c;
    }

    public calculaDelta():void{
         this.delta = Math.pow(this.b,2) -4*this.a*this.c
    }

    public formuladeBascara():void{ 
        this.x1 = (-this.b + Math.sqrt(this.delta))/ (2 * this.a)
        this.x2 = (-this.b - Math.sqrt(this.delta))/ (2 * this.a)
    }
  
    get retornaDelta():number{
        return this.delta
    }

    get retornax1():number{
        return this.x1
    }
    get retornax2():number{
        return this.x2
    }
}
const e1 = new equacaoSegundoGrau(5, -3,-2)
e1.calculaDelta()
e1.formuladeBascara()
console.log('x1',e1.retornax1)
console.log('x2',e1.retornax2)
console.log(e1.retornaDelta)
