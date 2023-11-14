// ALUMNO: ALBERT PÉREZ BALEYTO


function DiccionarioDeSinonimos(){
    const diccionarioSinonimos = new Map([]);
    this.agregarSinonimo = function(palabra, sinonimo){
        diccionarioSinonimos.has(palabra)?diccionarioSinonimos[palabra].push(sinonimo):diccionarioSinonimos.set(palabra,[sinonimo])    
    };
    this.obtenerSinonimos = function(palabraConsultar){
    return diccionarioSinonimos.get(palabraConsultar);
    }
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