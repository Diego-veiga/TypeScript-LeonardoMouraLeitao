class Aluno{
    public id:number;
    public nome:string;
    public notas:number[]
    private media:number
    public status:Status
    constructor(public Nome:string, public Nota:number[]){
        this.id = this.random(),
        this.nome=Nome;
        this.notas = this.Nota
    }
     random(min=0,max=1000){
        return Math.floor(Math.random() * (max -min) + min)
      }

    calculaMedia():number{
      let total =this.notas.reduce((total, n)=> total+=n )
      this.media =total/4
      return  this.media
    }
    
    alteraSatus():Status{
       if(this.media > 6){
           this.status = Status.aprovado
       }else if(this.media >4 && this.media<5.9){
           this.status = Status.verificacaoSuplementar
       }else{
           this.status = Status.reprovado
       }
       return this.status

    }

}
enum Status{
    aprovado=1,
    verificacaoSuplementar=2,
    reprovado=3

}

const a = new Aluno('Diego', [10,7,8,6])
console.log(a.calculaMedia())
console.log('status',a.alteraSatus())


 