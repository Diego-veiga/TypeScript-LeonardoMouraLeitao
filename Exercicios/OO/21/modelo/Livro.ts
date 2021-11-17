import { Guid } from "guid-typescript"

export class Livro{
   private Id:string
   private Titulo:string;
   private DataLançamento:Date;
   private numeroPaginas:number
   private quantidadeEstoque:number
   private diasEmprestimo:number
   constructor(Titulo:string,DataLançamento:Date,numeroPaginas:number,quantidadeEstoque:number, diasEmprestimo:number){
        this.Id= this.id(),
        this.Titulo= Titulo,
        this.DataLançamento= DataLançamento,
        this.numeroPaginas= numeroPaginas,
        this.quantidadeEstoque=quantidadeEstoque,
        this.diasEmprestimo= diasEmprestimo
   }

    protected  id(){
        const id = Guid.create().toString()
        return id
    }

    public getID(){
        return this.Id
    }

    public baixarEstoque(){
        this.quantidadeEstoque -= 1
    }

    public getTituloLivro():string{
        return this.Titulo
    }

    public DiasEmprestimo():number{
        return this.diasEmprestimo
    }

}