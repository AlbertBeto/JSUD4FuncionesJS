// ALUMNO: ALBERT PÉREZ BALEYTO

/*EJERCICIO UD4.1 
La función de ordenación de arrays en JavaScript sort() requiere que se le pase una función de
comparación que usará en la ordenación del array.
Se pide realizar la función de comparación que ordene el siguiente array por los siguientes criterios:
1) En primer lugar se ordenará por el cargo (primero Profesor, después Administrativo y por
último Estudiante).
2) Después por edad, descendente
3) Y en último lugar, por nombre, ascendente.
*/
'use strict'

let personas=[
    ["Adrián",47, "Profesor"],
    ["Luisa",60, "Profesor"],
    ["Ana",20, "Estudiante"],
    ["Blas",36, "Estudiante"],
    ["Agustín",50, "Profesor"],
    ["Felipe",25, "Estudiante"],
    ["Pedro",19, "Estudiante"],
    ["Zoraida",36, "Estudiante"],
    ["Juan",36, "Administrativo"],
    ["Toñi",48, "Administrativo"],
    ["Juan",16, "Estudiante"],
    ["Miriam",15, "Estudiante"],
    ["Rosa",75, "Estudiante"],
    ["Pepe",31, "Estudiante"],
    ["Fermín",64, "Estudiante"],
    ["Jose",47, "Profesor"]
];

//Primero confirmamos el orden del tercer puesto del array, que al ser un string
//le damos valor de prioridad utilizando una función creada más abajo. 
//Una vez organizado por este tercer valor empezamos a organizar los que son iguales
//Que primero miran la segunda posición y ordenan  por valor numerico y por último los que
//son iguales los ordena por valor alfabetico.

console.log(
    personas.sort((a,b)=>{ 
        if(valorCargo(b[2])>valorCargo(a[2])){
            return 1;
        }else if(valorCargo(b[2])==valorCargo(a[2])){
            if(b[1]-a[1]== 0){
                if(a[0]>b[0]){
                    return 1;
                }else if(a[0]<b[0]){
                    return -1;
                }else{
                    return 0;
                }
            }else {return b[1]-a[1]}
        }else if (valorCargo(b[2])<valorCargo(a[2])){
           return -1
        }  }  
));

//En esta función le damos un valor operable a las diferentes opciones de texto. 
//Ya que sin este valor y al no tener otras caracteristicas diferenciadoras 
// en el orden que queremos, hay que generar el orden artificialmente.  
function valorCargo(a){
    if(a=="Profesor"){
        return 1;
    }else if(a=="Administrativo"){
        return 0;
    }else if(a=="Estudiante"){
        return -1;
    }
}
