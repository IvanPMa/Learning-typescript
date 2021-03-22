//Nos permite crear variables del tipo de la interfaz y acceder a sus atributos
interface Persona {
    // Atributos 
    nombre :string
    apellido: string
}

function caminar(persona:Persona):void{
    console.log('La persona ' + persona.nombre,persona.apellido+' esta caminando');
}
let nueva_persona:Persona = { nombre: 'ivan',apellido:'Pacheco'}
console.log (nueva_persona);

caminar (nueva_persona)