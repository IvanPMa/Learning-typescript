var persona1 = { altura: 1.68, peso: 75, nombre: 'Ivan' };
console.log(mostrarPersona(persona1));
function mostrarPersona(persona) {
    var mediapeso = persona.altura / persona.peso;
    if (persona.nombre) {
        return persona.nombre + " tiene una media de " + mediapeso;
    }
    else {
        return "No se quien eres pero tiene una media de " + mediapeso;
    }
}
