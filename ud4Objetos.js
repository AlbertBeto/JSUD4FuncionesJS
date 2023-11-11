'use strict'


//Vamos a crear un constructor
function Persona(nombre, apellidos,edad, sexo){
    this.nombre=nombre;
    this.apellidos=apellidos;
    this.edad=edad;
    this.sexo=sexo;
    //Aqui es donde creamos una funcion dentro del constructor.
    this.nombrecompleto= function(){return this.nombre+" "+this.apellidos};
}

const albert = new Persona("Albert","PB",22,"Varon")
const mai = new Persona("Mai","HB",40,"Hembra")
console.log(albert.edad)
console.log(mai.edad)
console.log(albert.nombrecompleto())
console.log(mai.nombrecompleto())




/* Ejercicio completo para hacerun conversor de temperaturas. 
//Objeto de nombre temperatura con una sola variable llamada temperatura

const mi_temperatura={
    temperatura:0, //la temperatura interna siempre se guarda en ºK

    get kelvin(){
        return this.temperatura;
    },

    set kelvin(nueva_temperatura){
        if(nueva_temperatura>=0){
        this.temperatura=nueva_temperatura;}
        else{this.temperatura=0}
    },

//gettes de farenheit y celsius
    get farenheit(){
        return (this.temperatura*1.8)-459.67;
    },
    get celsius(){
        return this.temperatura-273.15;
    },

    set celsius(nueva_temperatura){
        this.kelvin = nueva_temperatura+273.15;        
    },
    set farenheit(nueva_temperatura){
        this.kelvin = (nueva_temperatura+459.67)/1.8;        
    }

}

mi_temperatura.kelvin=100;
mi_temperatura.farenheit=100;
//mi_temperatura.celsius=100;
console.log(mi_temperatura.kelvin);
console.log(mi_temperatura.celsius);
console.log(mi_temperatura.farenheit);

 */




/*
const mi_objeto={
    nombre:"Albert ",
}

mi_objeto.apellidos="Pérez Baleyto";
console.log(mi_objeto.nombre);
console.log(mi_objeto.apellidos)

let nuevo_objeto=mi_objeto;
nuevo_objeto.nombre="Perico";
console.log(mi_objeto.nombre);
//Si uso las llaves 
console.log(mi_objeto["nombre"]);
let indice = "apellidos";
console.log(mi_objeto[indice]);
*/
/*
const estudiante={
    nombre:"Albert",
    apellido1:"Perez",
    apellido2:"Baleyto",
    edad:"40",
    curso:"DAWDIY",
    mochila:{
        bocata:"jamon",
        bebida:"agua",
        libro:"ninguno",
        libreta:"grande",
    },
    bolsa:{
        encendedor:"gasolina", 
        caramelos:"fresa"
    },
    comedor:"Si",
    que_hay_en_mi_mochila:function (){
        for (let cosa in this["mochila"]){
        console.log(cosa +" "+this["mochila"][cosa]);
        }
    },
    que_hay_en_mi_contenedor:function (contenedor){
        for (let cosa in this[contenedor]){
        console.log(cosa +" "+this[contenedor][cosa]);
        }
    }
}


for (let campo in estudiante){
    if(typeof estudiante[campo]=="object" && campo=="mochila"){
        estudiante.que_hay_en_mi_mochila();
}else if(typeof estudiante[campo]=="object"){
    estudiante.que_hay_en_mi_contenedor(campo);
}else{
    console.log(campo + " "+estudiante[campo]);}
}
*/
/* Esto funciona 
for (let campo in estudiante){
    if(typeof estudiante[campo]=="object"){
        for (let mochila in estudiante[campo]){
            console.log(mochila +" "+estudiante[campo][mochila]);
        }
}else{
    console.log(campo + " "+estudiante[campo]);}
}*/

/*

for (let campo in estudiante){
    console.log(campo + " "+estudiante[campo]);
}*/