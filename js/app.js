// Declaración de productos y precios
let productos = [
  { nombre: "Batido de fresa", precio: 100 },
  { nombre: "Batido de chocolate", precio: 120 },
  { nombre: "Batido de vainilla", precio: 110 }
];

// Función para mostrar los productos disponibles
function mostrarProductos() {
  let mensaje = "Productos disponibles:\n";
  productos.forEach((producto, index) => {
      mensaje += `${index + 1}. ${producto.nombre} - $${producto.precio}\n`;
  });
  return mensaje;
}

// Función para calcular el total de la compra
function calcularTotal(precio, cantidad) {
  return precio * cantidad;
}

// Simulación de compra
function iniciarCompra() {
  // Mostrar productos al usuario
  let seleccion = prompt(mostrarProductos() + "\nElige el número del producto que deseas comprar:");
  let productoSeleccionado = productos[seleccion - 1]; // Restar 1 porque el índice en el array empieza en 0
  
  if (productoSeleccionado) {
      // Capturar cantidad
      let cantidad = parseInt(prompt(`¿Cuántos ${productoSeleccionado.nombre} deseas comprar?`));
      
      if (!isNaN(cantidad) && cantidad > 0) {
          // Calcular el total
          let total = calcularTotal(productoSeleccionado.precio, cantidad);
          alert(`Has comprado ${cantidad} ${productoSeleccionado.nombre}. El total es: $${total}`);
          console.log(`Producto: ${productoSeleccionado.nombre}, Cantidad: ${cantidad}, Total: $${total}`);
      } else {
          alert("La cantidad ingresada no es válida.");
      }
  } else {
      alert("Producto no válido. Por favor, selecciona uno de la lista.");
  }
}

// Llamar a la función para iniciar la simulación de compra
iniciarCompra();
