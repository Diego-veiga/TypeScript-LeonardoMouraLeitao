import { Emprestimo } from './Emprestimo';
import { Guid } from "guid-typescript";
import { Sexo } from "../enum/Sexo";


 export default abstract class Pessoa{
     private Id:string
     protected Nome:string;
     protected Idade:number;
     protected Sexo:Sexo;
     protected Emprestimos:Emprestimo[]

     constructor(Nome:string,Idade:number,Sexo:Sexo){
         this.Id= this.id()
         this.Nome=Nome,
         this.Idade=Idade,
         this.Sexo=Sexo,
         this.Emprestimos=[]
     }

     protected  id(){
         const id = Guid.create().toString()
         return id
     }

     protected abstract RealizarEmprestimo():void

}