
class Pessoaa {
    private nome:string=''
    private dataNascimento:Date
    private altura:number=0

    set Nome(nome:string){
        if(nome.length>3){
            this.nome = nome
        }else{
            throw Error('Nome deve ter mais de 3 caracteres')
        } 
    }
    get Nome():string{
        return this.nome.toUpperCase()
    }

    set DataNascimento(data:Date){
        if(data < new Date()){
            this.dataNascimento= data
        }else{
            throw new Error('A data informada deve ser uma data menor do que hoje')
        }
    }
    get DataNascimento():Date{
        return this.dataNascimento
    }
    
    set Altura(altura:number){
        this.altura=altura
    }
    get Altura():number{
        return this.altura
    }

    public Descrever(){
        return `Meu nome é ${this.Nome}, tenho ${this.RetonaIdade()} anos  e tanho ${this.Altura} de altura ` 
    }
    public RetonaIdade ():number{
        const hoje = new Date()
        console.log(hoje.getFullYear())
        console.log(this.dataNascimento)
        console.log(this.dataNascimento.getFullYear())
        return hoje.getFullYear() - this.dataNascimento.getFullYear()
    }
}


const pessoaa1 = new Pessoaa()
pessoaa1.Nome='Diego'
pessoaa1.DataNascimento= new Date(1996,2,29)
pessoaa1.Altura=1.60

console.log(pessoaa1.Descrever())
