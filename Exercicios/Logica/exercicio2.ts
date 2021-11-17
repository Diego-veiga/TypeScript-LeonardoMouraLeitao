import { Console } from "console"

class Pessoaaa{
    constructor(public nome:string, public idade:number, public altura:number){}

}

class Agenda {
   
    private pessoas= new Array<Pessoaaa>()

    public armazenarPessoa(pessoa:Pessoaaa):void{
        this.pessoas.push(pessoa)
    }
    public removerPessoa(nome:string):void{
        const posicao =this.buscaPessoa(nome)
        if(posicao){
            this.pessoas.splice(posicao, 1)
        }else{
            console.log('Item não encontrado')
        }
        

    }
    public buscaPessoa(nome:string){
        for(let index = 0; index<this.pessoas.length; index++){
          if(this.pessoas[index].nome === nome){
              return index
          }
       }
    } 
   public imprimiAgenda(){
       console.log(this.pessoas)
   }
   public imprimirPessoa(index:number){
     console.log(this.pessoas[index])
   }
}


const ppp = new Pessoaaa('diego', 27,1.70)
const pppp = new Pessoaaa('dom', 33,1.70)
const pppppp = new Pessoaaa('follman', 42,1.70)
const ppppp = new Pessoaaa('tiago', 35,1.70)

const agenda = new Agenda()
agenda.armazenarPessoa(ppp)
agenda.armazenarPessoa(pppp)
agenda.armazenarPessoa(pppppp)
agenda.armazenarPessoa(ppppp)
agenda.imprimiAgenda()
console.log(agenda.buscaPessoa('tiago'))
agenda.removerPessoa('follman')
agenda.imprimiAgenda()
agenda.imprimirPessoa(2)