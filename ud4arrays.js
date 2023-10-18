'use strict'
//Que pida al usuario filas y columnas que cree una matriz. Array de arrays con número aleatorios. 

let arrayExt=prompt("Longitud primer array");
let arrayInt=prompt("Longitud arrays interiores");

let mimatriz=[];

for (let j=0;j<(arrayExt);j++){
    mimatriz[j]= [];
    for (let i=0; i<(arrayInt);i++){
        mimatriz[j][i]=parseInt((Math.random())*100);
        console.log("valor de mi raiz: "+mimatriz[j][i]);
    } 
};

let matriz=[];
//El del profe
for (let j=0;j<(arrayExt);j++){
    matriz[j]= [];
    for (let i=0; i<(arrayInt);i++){
        matriz[j][i]=Math.round(Math.random()*(10-(-10))+1)-10;
        //
        console.log("valor raiz: "+matriz[j][i]);
    } 
};

console.log(matriz);
/*
for(let valor of matriz){ 
    if(valor.length>=0){
        for(let subvalor of valor){
            console.log(subvalor+", ")
        }
    }else{console.log(valor+", ")}
};
*/
let neomatriz=[];

for(let valor of matriz){ 
    if(valor.length>=0){
        for(let subvalor of valor){
            neomatriz +=subvalor+", ";
        }
    }else{console.log(valor+", ")}
};

console.log("Los valores son: "+ neomatriz);

