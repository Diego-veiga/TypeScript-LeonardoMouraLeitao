interface figura {
    calculaArea(pi?:number):number
}

class Quadrado implements figura {
    constructor(public  lado:number) {}
        
    calculaArea():number{

        return this.lado *this.lado
    }
    
}