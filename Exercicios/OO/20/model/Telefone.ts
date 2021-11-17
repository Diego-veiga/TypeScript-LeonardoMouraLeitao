import { Guid } from "guid-typescript";

export class Telefone{
    private Id:string;
    private DDD:number;
    private Numero:number;

    constructor(DDD, Numero){
        this.Id=this.id()
        this.DDD=DDD,
        this.Numero=Numero
        
    }
    
    public id(){
        const id =  Guid.create().toString()
        return id
    }
}