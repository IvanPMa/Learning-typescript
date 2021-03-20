class Animal{
    public nombre:string
    public tamano:number

    public constructor(nombre_:string,tamano_:number ){
        this.nombre = nombre_
        this.tamano = tamano_
    }

    public moverse():void{
        console.log("Me estoy moviendo");
    }
}

const obj = new Animal('serpiente',2)

obj.moverse