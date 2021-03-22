//Clases que se definen copmon plantillas para luego  ser heredadas y
//sobreescribir sus metodos

abstract class Persona{
    abstract caminar():void
    abstract gatear():void

    saludar (saludo:string) :  string{
        return saludo
    }
}

class Hijo extends Persona{
    accion:string
    constructor(accion_:string){
        super()
        this.accion = accion_
    }

    caminar():void{
        console.log("Caminando",this.accion);
    }

    gatear(): void {

    }
}

let hijo = new Hijo('Si');
hijo.caminar()

