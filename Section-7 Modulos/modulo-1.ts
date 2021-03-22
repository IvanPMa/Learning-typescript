class Persona {
    nombre:string
    edad:number
    altura:number

    constructor (nombre,edad,altura){
        this.nombre = nombre
        this.edad = edad 
        this.altura = altura
    }

    mostrar ():void{
        console.log(this.nombre)
    }
}

export default Persona
//Esportamos todos el objeto con todo sus componentes