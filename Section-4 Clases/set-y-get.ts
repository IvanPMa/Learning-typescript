class Persona{
    private nombre: string
    private edad: number

   constructor(nombre_:string, edad_:number){
        this.nombre = nombre_
        this.edad = edad_
    }

    set setNombre(_nombre:string){
        this.nombre = _nombre
    }
    get getNombre(){
        return this.nombre
    }

}

const persona = new Persona('Ivan',22);
persona.setNombre = 'Juan'
console.log(persona.getNombre)