function mostrar(dato) {
    return dato;
}
console.log(mostrar('Manuel'));
// function mostrarGenerica<Tipo>(dato:Tipo):Tipo{ }
function mostrarGenerica(dato) {
    return dato;
}
console.log(typeof mostrarGenerica(22));
