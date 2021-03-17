// tsc --w archivos.ts
function mostrar(texto:string){
    console.log(texto)
}

let mostrar2 = (texto:string) => console.log(texto)
mostrar("Hola")
mostrar2("mundo")