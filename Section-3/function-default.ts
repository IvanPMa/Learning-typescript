// Parametros por defecto

let mostrar= (nombre:string, apellido:string, edad:number=18) =>{
    return `Se llama ${nombre} se apellida ${apellido} edad: ${edad}`  
}
 console.log(mostrar('Ivan','Pacheco',22));

 console.log(mostrar('Plesua', 'Caligari'));
