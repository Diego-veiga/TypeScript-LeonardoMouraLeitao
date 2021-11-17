import { Sexo } from "../enum/Sexo";
import Pessoa from "./Pessoa";

export class Aluno extends Pessoa { 
    private RA:number;

    constructor(Nome:string,Idade:number, Sexo:Sexo,RA:number){
        super(Nome, Idade, Sexo)
        this.RA = RA
        this.Emprestimos=[]
    }


    public RealizarEmprestimo(){

    }
  
 
}
