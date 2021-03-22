class IPersona<T>{
    nombre: string
    edad:T


    Mostrar(dato:T):T {
        return dato
    }
}

let obj = new IPersona()