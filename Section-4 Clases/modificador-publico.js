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
var obj = new Animal('serpiente', 2);
obj.moverse;
