function mostrar(dato:string):string{
    return dato
}

console.log(mostrar('Manuel'))


// function mostrarGenerica<Tipo>(dato:Tipo):Tipo{ }
function mostrarGenerica<T>(dato:T):T{
    return dato
}

console.log ( typeof mostrarGenerica(22)); 