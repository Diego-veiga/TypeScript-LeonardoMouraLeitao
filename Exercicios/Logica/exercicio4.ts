import { type } from "os"
import { textChangeRangeIsUnchanged } from "typescript"

type Canal={
    numero:number,
    descricao:string
}

class Televisao{
    protected volume:number=0
    protected volumeMaximo:number=0
    protected canais: Canal[]=[]
    protected  canalAtual:Canal

    constructor(public VolumeMaximo:number, public Canais:Canal[]){
        this.volumeMaximo=VolumeMaximo
        this.canais=Canais
    }

    public aumentarVolume(){
        return this.volume=this.volume + 1
        
    }
    public diminuirVolume():number{
        return this.volume-=1
    }
    mudarProximoCanal():Canal{
        if(this.canalAtual){
           return this.canalAtual = this.canais[0]
        }else{
            const idenatual=this.canais.indexOf(this.canalAtual)
            console.log(idenatual)
            return this.canalAtual = this.canais[idenatual+1]
        }
    } 

    mudaCanalExpecifico(numero:number):Canal | any{
      const canalProcurado= this.Canais.find((element)=>{
            element.numero=== numero
        })
        if(canalProcurado){
             this.canalAtual= canalProcurado
        }else{
            throw new Error('Canal não ecnotrado')
         }
    }
}


class Controle{
    televisao:Televisao

    constructor(public Televisao:Televisao){
        this.televisao= Televisao
    }

    aumentarVolume():number{
        return this.televisao.aumentarVolume()
    }
    diminuirVolume():number{
        return this.televisao.diminuirVolume()
    }
    mudarProximoCanal():Canal{
        return this.televisao.mudarProximoCanal()
    }
    procurarCanalExpecifico(numero:number){
        this.procurarCanalExpecifico(numero)
    }

}

const listaCanal:Canal[]=[{numero:1, descricao:'band'},{numero:2, descricao:'record'},{numero:3, descricao:'globo'},{numero:4, descricao:'redeTV'}]

const tv = new Televisao(100,listaCanal)

const controle = new Controle(tv)

console.log(controle.aumentarVolume())
console.log(controle.aumentarVolume())
console.log(controle.mudarProximoCanal())