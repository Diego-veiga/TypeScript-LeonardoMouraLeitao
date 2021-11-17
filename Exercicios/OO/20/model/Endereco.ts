import { Guid } from 'guid-typescript';
import { TipoEndereco } from './../enum/TipoEndereco';


export class Endereco{
    private Id:string;
    private NumeroCasa:string
    private Rua:string;
    private Bairro:string;
    private CEP:number;
    private Cidadde:string
    private UF:string
    private TipoEndereco:TipoEndereco

    constructor(numeroCasa, rua, bairro, cep, cidade, uf, tipoendereco){
        this.Id= this.id()
        this.NumeroCasa = numeroCasa,
        this.Rua= rua,
        this.Bairro = bairro,
        this.CEP=cep,
        this.Cidadde=cidade,
        this.UF =uf,
        this.TipoEndereco= tipoendereco

    }

    public id(){
        const id =  Guid.create().toString()
        return id
    }
    
}