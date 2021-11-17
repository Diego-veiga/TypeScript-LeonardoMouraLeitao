
class Elevador{
     private andarAtual:number=0
     private totalAndares:number=0
     private capacidade:number=0
     private pessoasPresentes:number=0

     constructor(public Capacidade:number, public numeroAndares:number){
         this.capacidade=Capacidade
         this.totalAndares=numeroAndares
     }
     public entra():string | number{
        
        if(this.pessoasPresentes < this.capacidade){
             return this.pessoasPresentes+=1
        }else{
             return 'Elavdor lotado'
        }
    }
    public sai():string | number{
        if(this.pessoasPresentes>0){
            return this.pessoasPresentes-=1
        }else{
             return 'não existe nenhuma pessoa no elevador '
        }
    }
    public subir():string | number{
        if(this.andarAtual=== this.totalAndares){
            return 'ja esta no ultimo andar'
        }else{
            return this.andarAtual+=1
        }
    }
    public descer():string | number{
        if(this.andarAtual ===0){
            return ` o elevador ja esta no terreo`
        }else{
            return this.andarAtual-=1
        }
    }
}

const ele = new Elevador(3,5)

console.log(ele.entra())
console.log(ele.entra())
console.log(ele.entra())
console.log(ele.entra())
