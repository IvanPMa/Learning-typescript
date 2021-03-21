var Persona = /** @class */ (function () {
    function Persona(nombre_, edad_) {
        this.nombre = nombre_;
        this.edad = edad_;
    }
    Object.defineProperty(Persona.prototype, "setNombre", {
        set: function (_nombre) {
            this.nombre = _nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "getNombre", {
        get: function () {
            return this.nombre;
        },
        enumerable: false,
        configurable: true
    });
    return Persona;
}());
var persona = new Persona('Ivan', 22);
persona.setNombre = 'Juan';
console.log(persona.getNombre);
