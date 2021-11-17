import { Guid } from 'guid-typescript';
import { Contato } from './Contato';
export class Agenda{
    private Id:string;
    private Contatos:Contato[]

    constructor(){
        this.Id= this.id()
        this.Contatos=[]
    }
    private id():string{
        const id =  Guid.create().toString()
        return id
    }

    public adicionarContato(contato:Contato):void{
        let exist =this.VerificaExistencia(this.Contatos,contato)
      if (exist){
            throw Error('Endereco ja cadastrado')
        }else{
            this.Contatos.push(contato)
        }
        
    }

    private  VerificaExistencia<T>(lista:T[], elemento:T):boolean{
        let elementoExistente= lista.indexOf(elemento)
        if(elementoExistente === -1) return false
        
        return true
    }
}