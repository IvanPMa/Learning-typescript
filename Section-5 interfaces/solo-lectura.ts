//Cuando yo instancio por primera vez la interfaz puedo darle un valor a sus 
//atributos, pero despues de eso ya no puedo modificarlo
interface Persona {
    readonly nombre:string
    readonly apellido:string
}

let persona:Persona = {nombre:'Ivan',apellido:'Pacheco'}
// persona.nombre = 'Jose'
console.log(persona);