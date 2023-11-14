// ALUMNO: ALBERT PÉREZ BALEYTO


function DiccionarioDeSinonimos(){
    //Creo el map connombre diccionarioSinonimos
    const diccionarioSinonimos = new Map([]);
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

    this.eliminarSinonimo = function(palabraEliminarSinonimo, sinonimoAEliminar){
        if (diccionarioSinonimos.has(palabraEliminarSinonimo)){
            //AQUI ME FALTA EL CODIGO!!!!
        }  
    }

    //Creo una funcion con la que al recibir la palabra a eliminar
    this.eliminarPalabra = function(palabraEliminar){
        diccionarioSinonimos.has(palabraEliminar) ? diccionarioSinonimos.delete(palabraEliminar) : console.log("La palabra no existe.");
    }

    //Esta es la llave de cierre del objeto/constructor/función DiccionarioDeSinonimos
};

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