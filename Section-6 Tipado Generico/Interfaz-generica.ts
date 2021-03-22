interface IPersona<T>{
    nombre:T
}

let obj:IPersona<string> = { nombre: 'Ivan'}
let num:IPersona<number> = {nombre: 22}