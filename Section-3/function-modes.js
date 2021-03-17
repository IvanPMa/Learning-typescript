// tsc --w archivos.ts
function mostrar(texto) {
    console.log(texto);
}
var mostrar2 = function (texto) { return console.log(texto); };
mostrar("Hola");
mostrar2("mundo");
