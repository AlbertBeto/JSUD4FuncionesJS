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

//console.log(personas);
//console.log(personas.sort());
console.log(
    personas.sort((a,b)=>{

        if(valorcargo(b[3])>valorCargo(a[3])){
            if(b[1]-a[1]== 0){
                if(a[0]<b[0]){
                    return 1;
                }else if(a[0]>b[0]){
                    return -1;
                }else{
                    return 0;
                }
            }else {return b[1]-a[1]}
        }else if(b[3]=="Administrativo"){
            if(b[1]-a[1]== 0){
                if(a[0]<b[0]){
                    return 1;
                }else if(a[0]>b[0]){
                    return -1;
                }else{
                    return 0;
                }
            }else {return b[1]-a[1]}
        }else if (b[3]=="Estudiante"){
            if(b[1]-a[1]== 0){
                if(a[0]<b[0]){
                    return 1;
                }else if(a[0]>b[0]){
                    return -1;
                }else{
                    return 0;
                }
            }else {return b[1]-a[1]}
        }  }  
));

function valorCargo(a){
    if(a=="Profesor"){
        return 100;
    }else if(a=="Administrativo"){
        return 0;
    }else{
        return -1;
    }
}

console.log(personas.sort((a,b)=>{
    if(b[1]-a[1]== 0){
        if(a[0]<b[0]){
            return 1;
        }else if(a[0]>b[0]){
            return -1;
        }else{
            return 0;
   }
}else {return b[1]-a[1]}}
));



/*
//ESto funciona ordenando solo por fecha y luego por nombre
console.log(
    personas.sort((a,b)=>{
        if(b[1]-a[1]== 0){
            if(a[0]<b[0]){
                return 1;
            }else if(a[0]>b[0]){
                return -1;
            }else{
                return 0;
       }
    }else {return b[1]-a[1]}})

);
*/