Proyecto: Simulador de Compra de Batidos
Descripción:
Este proyecto simula el proceso de compra de productos (batidos) utilizando JavaScript. La funcionalidad principal es permitir al usuario seleccionar un batido y la cantidad que desea comprar, luego calcular el costo total y mostrarlo tanto en pantalla como en la consola.

Cambios y Correcciones respecto al código anterior:
Eliminación de Manipulación del DOM:

En la primera entrega, se incluían manipulaciones innecesarias del DOM a través de métodos como document.getElementById() y otras interacciones directas con los elementos HTML. Estas interacciones no eran requeridas y fueron eliminadas para cumplir con las instrucciones de la segunda entrega.
El código actual evita el uso del DOM y se basa únicamente en funciones de entrada/salida como prompt(), alert(), y console.log() para la interacción con el usuario, siguiendo estrictamente las especificaciones del trabajo práctico.
Declaración de Productos y Precios:

Se ha creado un array de objetos llamado productos, donde cada objeto representa un batido con su respectivo nombre y precio. Esto permite organizar mejor los datos y facilita su manipulación dentro del simulador.
Función para Mostrar Productos:

Se implementó la función mostrarProductos(), que recorre el array de productos utilizando forEach() y construye un mensaje con la lista de productos disponibles y sus precios.
Este mensaje se muestra al usuario mediante un prompt(), permitiendo que elija el producto que desea comprar.
Simulación de Compra:

El flujo de trabajo principal se encapsuló dentro de la función iniciarCompra(). Aquí, se muestra la lista de productos al usuario y se captura su elección.
Después de que el usuario elige un producto, se solicita la cantidad que desea comprar mediante un nuevo prompt().
Si el usuario ingresa un valor válido, se calcula el total de la compra utilizando la función calcularTotal(precio, cantidad) y se muestra el total en una ventana emergente (alert()). El resultado también se registra en la consola con console.log().
