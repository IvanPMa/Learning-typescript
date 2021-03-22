//  INTERFACES PARA FUNCIONES
//Definen plantillas de funciones que despues van a implementarse
interface IGeneral{
    (nombre:string, apellido:string, edad:number):void
}

let funcionGeneralUno:IGeneral

funcionGeneralUno = function (nombre:string, apellido:string, edad:number):void{
    console.log(`${nombre} con el apellido ${apellido} y la edad ${edad}`)
}

funcionGeneralUno('Ivan','Pacheco',22)