class Pessoa{
    public Nome: string;
    public DataNascimneto:Date;
    public Pai?:Pessoa
    public Mae?:Pessoa
    public Filho?:Pessoa[]
    constructor(public nome:string, public Datanascimento:Date, public pai?:Pessoa, public mae?:Pessoa,public filho?:Pessoa[]){
        this.Nome=nome,
        this.DataNascimneto =Datanascimento,
        this.Pai = pai,
        this.Mae = mae
        this.Filho = []
    }

    public adiconarPai(pai:Pessoa):void{
       if(!this.Pai){
           this.Pai =pai    
       }else{
        throw new Error('Pai ja cadastrado')
       }
    }

    public adiconarMae(mae:Pessoa):void{
      
        if(!this.Mae){
            this.Mae =mae
            
        }else{
         throw new Error('Mae ja cadastrado')
         
        }
       
    }

    public RemoverPai():void{
        if(this.Pai)
           this.Pai = undefined
        
    }

    public removerMae():void{
        if(this.Mae)
           this.Mae = undefined
    }
}

 const tereza = new Pessoa('Terezinha', new Date(20/5/1963))
 const joaoMigue = new Pessoa('Joao Migue', new Date(10/5/1935))
 const zezinha = new Pessoa('Zezinha', new Date(25/5/1945))

 tereza.adiconarMae(zezinha)
 tereza.adiconarPai(joaoMigue)
 console.log(tereza)
 