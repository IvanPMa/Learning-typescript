class Animal{
    private nombre:string
    private tamano:number

    public constructor(nombre_:string,tamano_:number ){
        this.nombre = nombre_
        this.tamano = tamano_
    }

    public moverse():void{
        console.log("Me estoy moviendo");
    }
}

/*hace como la propiedad o atributo y los metodos o funciones solos sean accesibles dentro de la 
clase que se declara*/

const obj = new Animal('serpiente',2)
obj.moverse()

class Conectar{
    private url:string

    constructor(){
        
    }
}

const ob = new Conectar()
// ob.