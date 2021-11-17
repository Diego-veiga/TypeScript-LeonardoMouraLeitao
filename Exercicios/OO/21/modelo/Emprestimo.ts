import { Livro } from './Livro';
import { Emprestimo_item } from './Emprestimo_item';
import { StatusEmprestimo } from './../enum/statusEmprestimo';
import { Guid } from "guid-typescript"


 export class Emprestimo{
    private Id:string;
    private DataEmprestimo:Date;
    private DataDevolucao:Date;
    private statusEmprestimo:StatusEmprestimo
    private itemEmprestimo:Emprestimo_item[]
    
  
    
    constructor(){
        this.Id=this.id(),
        this.DataEmprestimo = new Date()
        this.itemEmprestimo =[]
    }

    private  id(){
        const id = Guid.create().toString()
        return id
    }

    public getID():string{
        return this.Id
    }

    public VerificaTitulo(item:Emprestimo_item):any{
        let existe:boolean
       for( let emprestimo of this.itemEmprestimo){
           if(emprestimo.Livro.getTituloLivro() === item.Livro.getTituloLivro()){
            return existe=true
           }else{
            return existe=false
           }
       }
       

    }

    public AddItemEmprestimo(item:Emprestimo_item):any{
       if(!this.VerificaTitulo(item)){
           item.DataDevolucao()
           this.itemEmprestimo.push(item)
       }
    }
    public RemoverItemEmprestimo(item:Emprestimo_item){
        const index = this.searchItemEmprestimo(item)
        if(index === -1){
            return 'Item inexistente'
        }else{
           
            this.itemEmprestimo.slice(index,1)
        }
    }

    public searchItemEmprestimo(item:Emprestimo_item):number{
       const index  =  this.itemEmprestimo.indexOf(item)
       return index

    }

    
 }