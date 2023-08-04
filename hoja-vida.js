//Crear variables con diferentes tipos de datos (number, string, array, objetos literales) para almacenar información de una persona, 
//pasar estos como parámetros de una función, que imprimirá en pantalla usando un template string con backcstick (``).

let nombre = "kevin"
let cedula = "0150400158"
let skills = ["JS"]
let adress = {
    mainstreet: "Puruahes y ",
    secondstreet: "Colorados"
}

function curricuum(nombre, celdula,skills,adress){
    let salida = `hoja de vida
    nombre: ${nombre}
    cedula de identidad: ${cedula}
    habilidades: ${skills}
    adres: ${adress.mainstreet + adress.secondstreet}
    `;
    return salida
}

let out = curricuum(nombre,cedula,skills,adress)
alert (out)