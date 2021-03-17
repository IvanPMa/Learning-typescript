const opcionales = (nombre:string, apellido:string, edad?:number)=>{
    if(edad)
        console.log(`se llama ${nombre} su apellido es ${apellido} y sue edad es ${edad}`);
    else
        console.log(`Se llama ${nombre} su apellido es ${apellido}`)
}

opcionales ('Ivan','Pacheco',22)

opcionales('Manuel','Muñoz')