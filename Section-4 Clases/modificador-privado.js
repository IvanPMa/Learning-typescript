var Animal = /** @class */ (function () {
    function Animal(nombre_, tamano_) {
        this.nombre = nombre_;
        this.tamano = tamano_;
    }
    Animal.prototype.moverse = function () {
        console.log("Me estoy moviendo");
    };
    return Animal;
}());
/*hace como la propiedad o atributo y los metodos o funciones solos sean accesibles dentro de la
clase que se declara*/
var obj = new Animal('serpiente', 2);
obj.moverse();
var Conectar = /** @class */ (function () {
    function Conectar() {
    }
    return Conectar;
}());
var ob = new Conectar();
// ob.
