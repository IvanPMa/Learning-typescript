//Clases que se definen copmon plantillas para luego  ser heredadas y
//sobreescribir sus metodos
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona() {
    }
    Persona.prototype.saludar = function (saludo) {
        return saludo;
    };
    return Persona;
}());
var Hijo = /** @class */ (function (_super) {
    __extends(Hijo, _super);
    function Hijo(accion_) {
        var _this = _super.call(this) || this;
        _this.accion = accion_;
        return _this;
    }
    Hijo.prototype.caminar = function () {
        console.log("Caminando", this.accion);
    };
    Hijo.prototype.gatear = function () {
    };
    return Hijo;
}(Persona));
var hijo = new Hijo('Si');
hijo.caminar();
