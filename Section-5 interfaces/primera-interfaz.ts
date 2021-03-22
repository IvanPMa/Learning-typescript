//Nos permite crear variables del tipo de la interfaz y acceder a sus atributos
interface IPersona {
    // Atributos 
    nombre :string
    apellido: string
}

function caminar(persona:IPersona):void{
    console.log('La persona ' + persona.nombre,persona.apellido+' esta caminando');
}
let nueva_persona:IPersona = { nombre: 'ivan',apellido:'Pacheco'}
console.log (nueva_persona);
caminar (nueva_persona)
