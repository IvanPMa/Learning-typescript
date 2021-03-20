class Padre{
    nombre:string
    edad:number

    constructor(nombre_:string, edad_:number){
        this.nombre = nombre_
        this.edad = edad_
    }

    mostrarNombre():void{
        console.log(this.nombre);
    }

}


class Hijo extends Padre{
    apellido: string

    constructor(_nombre:string,_edad:number,_apellido:string){
        super(_nombre, _edad)
        this.apellido = _apellido
    }

    mostrarNombreHijo():void{
        console.log(this.nombre);
    }
}

const nuevoHijo = new Hijo ('Ivan',22,'Pacheco')
nuevoHijo.mostrarNombre()