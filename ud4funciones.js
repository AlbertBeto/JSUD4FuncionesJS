// document.write (parseInt("16XX3U")) //Devuelve el numero 16. y PQ??!! Pq js hace lo q puede

function cuadrado(a){ //Devolver el cuadrado del número pasado
   /* Mi codigo
    if(isNaN(a)){
        return document.write("No ha introducido un numero correcto")
    }else{
    return document.write(a*a);}
    }
    */

    //codigo profe
    if(typeof a !="number"){
        return "No es un número";
    }else if(!isFinite(a)){
        return "Debe de ser un numerofinito";
    }else{
    return a*a;
    }
}

document.write(cuadrado(5));

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
//Factorial en recursivo
function factorial(b){
    if(b<=0){return 1;}else{
    return b*factorial(b-1);}
}

document.write(factorial(2));

function imprimir(cadena){
    console.log("Me has pasado la cadena "+cadena)
}

imprimir