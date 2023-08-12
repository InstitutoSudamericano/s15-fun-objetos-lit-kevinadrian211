//Crear un array con objetos literales, pasar a una funcion como parametro e imprimir la infomracion 
//en pantalla cada elemento del array.
//ejemplo:
//const estudiantes = [{nombre: "Juan", edad: 34},{nombre: "Luis", edad: 25}];
//Salida:
//Mi nombre es Juan y tengo 34 anios
//Mi nombre es Luis y tengo 25 anios
//Nota: Usar FOR

function showobject(array){
    for( let i=0; i<array.length; i++ ) {
        alert("El estudiante " + array[i].name + " y tiene " + array[i].age + " años de edad")
    }
  };
  
  
  let people=[
    {name: "Kevin", age: 20},
    {name: "juan",age: 85}
  ];
  
  showobject(people)