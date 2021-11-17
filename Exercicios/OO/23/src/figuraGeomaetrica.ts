 class FiguraGeometrica {
    
    public  ladoA?:number=0
     public area:number=0
     constructor(){}

    protected  CalculaArea():number{
        
    }
   
}

class retangulo extends FiguraGeometrica{

  public CalculaArea():number{
      return 1
  }
}