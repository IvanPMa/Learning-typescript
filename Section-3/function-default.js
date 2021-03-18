// Parametros por defecto
var mostrar = function (nombre, apellido, edad) {
    if (edad === void 0) { edad = 18; }
    return "Se llama " + nombre + " se apellida " + apellido + " edad: " + edad;
};
console.log(mostrar('Ivan', 'Pacheco', 22));
console.log(mostrar('Plesua', 'Caligari'));
