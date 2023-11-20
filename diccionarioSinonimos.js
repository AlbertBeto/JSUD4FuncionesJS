// ALUMNO: ALBERT PÉREZ BALEYTO



function DiccionarioDeSinonimos(){
    //Creo el map con nombre diccionarioSinonimos
    const diccionarioSinonimos = new Map([]);

    //La linea siguiete la tengo comentada pero es para hacer pruebas.
    //diccionarioSinonimos.set("camino", ["via", "ruta"]);

    //Creo función de agregarSinonimo que confirma si existe palabra en el map. 
    //Si existe recupero con get la key palabra y pusheo el sinonimo. 
    //Si no existe creo el valor en el map especificando que value es un array. 
    this.agregarSinonimo = function(palabra, sinonimo){
        diccionarioSinonimos.has(palabra) ? diccionarioSinonimos.get(palabra).push(sinonimo) : diccionarioSinonimos.set(palabra,[sinonimo])    
    };

    //Creo función para sacar el valor de la key entregada. 
    this.obtenerSinonimos = function(palabraConsultar){
    return diccionarioSinonimos.get(palabraConsultar);
    }

    //Creo la funcion para eliminar un sinonimo de una palabra. 
    this.eliminarSinonimo = function(palabraEliminarSinonimo, sinonimoAEliminar){
        //Primero chequeamos que la palabra existe en nuestro map y si no existe devuelve un mensaje por consola avisando de ello. 
        if (diccionarioSinonimos.has(palabraEliminarSinonimo)){
            //Aqui usamos indexOf que nos devuelve la posición de un valor en un array y si no existe te devuelve un -1. Hacemos que si no devuelve -1 entre en el if y si devuelve -1 con lo que no existe el valor sacamos un mensaje por consolla avisando de ello. 
            if (diccionarioSinonimos.get(palabraEliminarSinonimo).indexOf(sinonimoAEliminar)!==-1){
                //Aqui uso el splice para quitar un valor de un array. Primero le pasamos la posición y luego le decimos cuantos valores debe quitar, en este caso 1.
                diccionarioSinonimos.get(palabraEliminarSinonimo).splice(diccionarioSinonimos.get(palabraEliminarSinonimo).indexOf(sinonimoAEliminar), 1);
            }else{console.log("El sinonimo "+sinonimoAEliminar+" no existe en la lista.")}
        }else{
            console.log("La palabra "+palabraEliminarSinonimo+" no está en la lista.")
        }
        //Aquí por picor cerebral si despues de todo la palabra que contiene los sinonimos se queda sin sinonimos procedemos a borrarla. 
        if(diccionarioSinonimos.get(palabraEliminarSinonimo).length<1){
            this.eliminarPalabra(palabraEliminarSinonimo);
        }  
    }

    //Creo una funcion con la que al recibir la palabra a eliminar
    this.eliminarPalabra = function(palabraEliminar){
        diccionarioSinonimos.has(palabraEliminar) ? diccionarioSinonimos.delete(palabraEliminar) : console.log("La palabra no existe.");
    }

    //Esta es la llave de cierre del objeto/constructor/función DiccionarioDeSinonimos
};

//Creo el "objeto" diccionario usando el "constructor" DiccionarioDeSinonimos.
const diccionario = new DiccionarioDeSinonimos();




const mantenerAbierto = true;

while (mantenerAbierto) {
    const opcion = prompt("Selecciona una opción:\n1. Agregar sinónimo\n2. Obtener sinónimos\n3. Eliminarsinónimo\n4. Eliminar palabra\n5. Salir");
    switch (opcion) {
        case "1":
            const palabra = prompt("Ingresa una palabra:");
            const sinonimo = prompt("Ingresa un sinónimo:");
            diccionario.agregarSinonimo(palabra, sinonimo);
            break;
        case "2":
            const palabraConsultar = prompt("Ingresa una palabra a consultar:");
            const sinonimos = diccionario.obtenerSinonimos(palabraConsultar);
            console.log(sinonimos);
            break;
        case "3":
            const palabraEliminarSinonimo = prompt("Ingresa una palabra:");
            const sinonimoAEliminar = prompt("Ingresa el sinónimo a eliminar:");
            diccionario.eliminarSinonimo(palabraEliminarSinonimo, sinonimoAEliminar);
            break;
        case "4":
            const palabraEliminar = prompt("Ingresa una palabra a eliminar:");
            diccionario.eliminarPalabra(palabraEliminar);
            break;
        case "5":
            alert("Saliendo del programa");
            mantenerAbierto=false;
            break 
        default:
            alert("Opción no válida. Por favor, elige una opción válida.");
    }
}