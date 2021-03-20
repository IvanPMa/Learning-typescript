//Cantidad indefini da de parametros de una funcion

const cartapostres = (postre:string, ...frutas:string[]):void =>{
    console.log(`El postre es ${postre} y tienes ${frutas}`)
}

cartapostres("postre1","Pera","Fresa","Naranja","Platano");