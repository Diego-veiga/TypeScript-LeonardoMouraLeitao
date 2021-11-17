import { Guid } from "guid-typescript";

export class Email{
    private Id:string;
    private Email:string;
    constructor(Email){
        this.Id=this.id()
        this.Email=Email

    }
    public id(){
        const id =  Guid.create().toString()
        return id
    }

}