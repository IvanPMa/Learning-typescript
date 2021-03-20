//Cantidad indefini da de parametros de una funcion
var cartapostres = function (postre) {
    var frutas = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        frutas[_i - 1] = arguments[_i];
    }
    console.log("El postre es " + postre + " y tienes " + frutas);
};
cartapostres("postre1", "Pera", "Fresa", "Naranja", "Platano");
