import { Livro } from './Livro';
import { Emprestimo } from './Emprestimo';
import { time } from 'console';

export class Emprestimo_item{
     public  Emprestimo:Emprestimo;
     private IdEmprestimo:string
     public Livro:Livro
     private IdLivro:string
     private dataEmprestimoItem:Date
     private dataDevolucaoItem:Date
   
     constructor(Emprestimo:Emprestimo,Livro:Livro){
         this.Livro=  Livro
         this.Emprestimo=Emprestimo
         this.IdEmprestimo= Emprestimo.getID()
         this.IdLivro = Livro.getID()
         this.dataEmprestimoItem = new Date()
        
     }

     public DataDevolucao():void{
        const periodoEmprestimo= this.Livro.DiasEmprestimo()
        this.dataDevolucaoItem =  new Date(this.dataEmprestimoItem.getTime() + (periodoEmprestimo * 24 * 60 * 60 * 1000));
     }
     
}