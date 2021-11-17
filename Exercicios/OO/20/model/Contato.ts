import { Endereco } from './Endereco';
import { Telefone } from './Telefone';
import { Email} from './Email'
import { Guid } from 'guid-typescript';

export class Contato{
    private Id:string
    private Nome: string;
    private Idade:number;
    private Telefone?: Telefone[];
    private Email?: Email[];
    private Enderecos?:Endereco[]

    constructor(Nome, Idade){
        this.Id= this.id()
        this.Nome=Nome,
        this.Idade=Idade,
        this.Telefone=[],
        this.Email=[],
        this.Enderecos=[]
    }

    private id():string{
        const id =  Guid.create().toString()
        return id
    }
    
    public adicionarTelefone(telefone:Telefone):void{
        let exist =this.VerificaExistencia(this.Telefone,telefone)
      if (exist){
            throw Error('Contato telefonico ja cadastrado')
        }else{
            this.Telefone.push(telefone)
        }
        
    }
   
    public adicionarEmail(email:Email):void{
        let exist =this.VerificaExistencia(this.Email,email)
      if (exist){
            throw Error('Email ja cadastrado')
        }else{
            this.Email.push(email)
        }
        
    }
    
    public adicionarEndereco(endereco:Endereco):void{
        let exist =this.VerificaExistencia(this.Enderecos,endereco)
      if (exist){
            throw Error('Endereco ja cadastrado')
        }else{
            this.Enderecos.push(endereco)
        }
        
    }
    private  VerificaExistencia<T>(lista:T[], elemento:T):boolean{
        let elementoExistente= lista.indexOf(elemento)
        if(elementoExistente === -1) return false
        
        return true
    }

    

}