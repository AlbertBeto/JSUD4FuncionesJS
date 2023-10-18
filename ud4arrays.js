'use strict'
//Que pida al usuario filas y columnas que cree una matriz. Array de arrays con número aleatorios. 

/*
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
*/
/*
for(let valor of matriz){ 
    if(valor.length>=0){
        for(let subvalor of valor){
            console.log(subvalor+", ")
        }
    }else{console.log(valor+", ")}
};
*/
/*
let neomatriz=[];

for(let valor of matriz){ 
    if(valor.length>=0){
        for(let subvalor of valor){
            neomatriz +=subvalor+", ";
        }
    }else{console.log(valor+", ")}
};

console.log("Los valores son: "+ neomatriz);
*/
/*
let d = ["a","b","c","d","e"];
let e = ["1","2","3","4","5"];

for(let i in e){
    d.slice(3+parseInt(i),0,e[i]);
}
console.log(d);
console.log(d.sort());

let z = [15,24,4,45,6,12,27,12];
function comparar(a,b){
    if(a>b){
        return 1;
    } else if (b>a){
        return -1;
    }else {
        return 0;
    }
}

console.log(z);
console.log(z.sort(comparar));

let w = [5,22,45,60,12,7,25];
w.sort((a,b)=>a-b);
console.log(w);
w.sort((a,b)=>b-a);
console.log(w);
*/

//Ordenamos 
let persona=[["Josep",22],["Gorg",12],["Carmen",22],["Jose",35],["Rosa",22],["María",22],["Asun",63],["Albert",45],["Jorge",40]];

/*
persona.sort((a1,a2)=>a1[1]-a2[1]);
console.log(persona);
*/

/*

persona.sort((a,b)=>{
     if(a[1]>b[1]){
return 1;
    }else if(a[1]<b[1]){
        return -1
    }else{
        if(a[0]<b[0]){
            return -1;
        }else{
            return 1;
        }  
    }});
console.log(persona);
*/
//El del profe . 
console.log(
    persona.sort((a,b)=>{
        if(b[1]-a[1]== 0){
            if(a[0]>b[0]){
            return 1;
        }else if(a[0]>b[0]){
           return -1;
       }else{
           return 0;
       }
    }else {return b[1]-a[1]}})
);


/*
function ordenaYNombre(a,b){
    if(a[1]>b[1]){
return 1;
    }else if(a[1]<b[1]){
        return -1
    }else{
        if(a[0]<b[0]){
            return -1;
        }else{
            return 1;
        }  
    }
}
console.log(persona.sort(ordenaYNombre));
*/