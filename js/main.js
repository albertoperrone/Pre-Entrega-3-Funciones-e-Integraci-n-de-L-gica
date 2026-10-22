function solicitarOpcion(mensaje) {
    let opcion = parseInt(prompt(mensaje));
    return opcion;
}

const calcularIVA = precio => precio * 0.21;

function calcularTotal(precioBase, nombreJuego) {
    let impuesto = calcularIVA(precioBase);
    let precioFinal = precioBase + impuesto;


    alert("Has agregado: " + nombreJuego + "\n" +
        "Precio base: $" + precioBase + "\n" +
        "Monto IVA (21%): $" + impuesto + "\n" +
        "Subtotal con impuesto: $" + precioFinal);

        return precioFinal;
}

let totalCarrito = 0;
let continuar = true;

let textoMenu = "Bienvenido/a a la tienda oficial de Capcom (Sector Raccoon City):\n" + 
                "1. Resident Evil 1 ($1)\n" + 
                "2. Resident Evil 2 ($2)\n" + 
                "3. Resident Evil 3 ($5)\n" + 
                "4. Resident Evil 4 ($10)\n" + 
                "5. Finalizar compra y salir";

while (continuar) {
    let opcionElegida = solicitarOpcion(textoMenu);

    switch (opcionElegida) {
        case 1:
            totalCarrito += calcularTotal(1, "Resident Evil 1");
            break;
        case 2:
            totalCarrito += calcularTotal(2, "Resident Evil 2");
            break;
        case 3:
            totalCarrito += calcularTotal(5, "Resident Evil 3");
            break;
        case 4:
            totalCarrito += calcularTotal(10, "Resident Evil 4");
            break;
        case 5:
            continuar = false;
            break;
        default:
            alert("Opción no válida. Por favor ingrese un número del 1 al 5.");
            break;
    }
}

if (totalCarrito > 0) {
    alert("Compra finalizada con éxito!\nEl monto total a pagar por tu pedido en Capcom, sector Raccoon City es: $" + totalCarrito.toFixed(2) + "\nGracias por tu compra!");
} else {
    alert("Gracias por visitar la tienda de Capcom!.");
}