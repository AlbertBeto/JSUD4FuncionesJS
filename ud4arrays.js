'use strict'
//Que pida al usuario filas y columnas que cree una matriz. Array de arrays con número aleatorios. 

let arrayExt=prompt("Longitud primer array");
let arrayInt=prompt("Longitud arrays interiores");

let matriz=[];

for (let j=0;j<(arrayExt);j++){
    matriz[j]= [];
    for (let i=0; i<(arrayInt);i++){
        matriz[j][i]=parseInt((Math.random())*100);
        console.log("valor raiz"+matriz[j][i]);
    } 
}