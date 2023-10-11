// document.write (parseInt("16XX3U")) //Devuelve el numero 16. y PQ??!! Pq js hace lo q puede
/*
function cuadrado(a){ //Devolver el cuadrado del número pasado
   /* Mi codigo
    if(isNaN(a)){
        return document.write("No ha introducido un numero correcto")
    }else{
    return document.write(a*a);}
    }
    */
/*
    //codigo profe
    if(typeof a !="number"){
        return "No es un número";
    }else if(!isFinite(a)){
        return "Debe de ser un numerofinito";
    }else{
    return a*a;
    }
}
imprimirpantalla("Creo una función para realizar cuadrados.");
$cuadrado = 12;

document.write("Este es el resultado del cuadrado de "+$cuadrado+ " = "+cuadrado($cuadrado));
*/
/*
function factorial(a,b){
factorialint=a;
final=b;
    if(typeof a !="number"){
        return "No es un número";
    }else if(!isFinite(a)){
        return "Debe de ser un numerofinito";
    }else{

    if(factorialint==0){
        return final;
    }elseif(final>0){final=a*(a-1); factorialint=factorialint-1;
    
    return factorial(factorialint,final)
    }

    

    //fin factorial
}
*/

/*
document.write("<br>")

//Factorial en recursivo
imprimirpantalla("Creo una variable para hacer factorial de manera recursiva.");
function factorial(b){
    if(b<=0){return 1;}else{
    return b*factorial(b-1);}
}

$factor=10;

document.write("Este es el factorial de "+$factor+" = "+factorial($factor));
document.write("<br>")
imprimirpantalla("Creo un par de funciones para imprimir en pantalla y en consola.")

function imprimirpantalla(cadena){
    document.write("<br>"+cadena+"<br>")
}
function imprimir(cadena){
    document.write("<br>"+"Me has pasado la cadena "+cadena+"<br>")
}
document.write("<br>")
*/
/*
//Nuevas funciones anonimas
function prueba(parametro){
    console.log(parametro);
    return(10);
};
//prueba("Soy Jose Juan");
let a = 1;
a=prueba;

let c=function(mensaje){
    console.log(mensaje);
}

let b=function(f,parametro){
    return f(parametro)
}

b(a(),"Hola"); //Esto es un error ya que a() es el resultado de la funcion en este caso 10
b(a,"Hola"); // Este es correcto ya que le pasamos a que es la funcion. 
*/

//Funciones Lambda

// let f =function(a,b){ return a*b};
//En lambda sería si solo tuviese una linea de accion. 
let f=(a,b)=>a*b; 
//Si fuese un solo parametro te puedes ahorrar los parentesis
let g=a=>a*a;
let h=a=>{a++; return g(a)}


