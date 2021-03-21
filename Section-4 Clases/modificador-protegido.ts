//Acceso a los atributos y metodos solo en la clase y las que heredan de esa clase
class Padre{
    protected nombre:string
    public constructor(nombre_:string){
        this.nombre = nombre_
    }
}

class Hijo extends Padre{
    public apellido: string

    constructor (nombre_:string, apellido_:string){
        super(nombre_)
        this.apellido = apellido_
    }

    mostrarNombre(): void {
        console.log(this.nombre)
    }
}
const objeto = new Hijo('Ivan', 'Pacheco')
// objeto.
