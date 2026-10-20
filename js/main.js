let continuar = true;
let precioBase= 0;
let nombreSeleccionado = "";

while (continuar) {
let nombreJuego = parseInt
(prompt("Bienvenido/a a la tienda oficial de Capcom!, te encuentras en el sector Raccoon City, escoge el juego que deseas comprar:\n" + "1. Resident Evil 1\n" + "2. Resident Evil 2\n" + "3. Resident Evil 3\n" + "4. Resident Evil 4\n"));
    console.log(nombreJuego);

    switch (nombreJuego) {
        case 1:
            precioBase = 1;
            nombreSeleccionado = "Resident Evil 1";
            console.log("Usted a elegido Resident Evil 1, el precio es de 1 dólar");
            alert("Usted a elegido Resident Evil 1, el precio es de 1 dólar");
            continuar = false
            break
        case 2:
            precioBase = 2;
            nombreSeleccionado = "Resident Evil 2";
            console.log("Usted ha elegido Resident Evil 2, el precio es de 2 dólares");
            alert("Usted ha elegido Resident Evil 2, el precio es de 2 dólares");
            continuar = false
            break
        case 3:
            precioBase = 5;
            nombreSeleccionado = "Resident Evil 3";
            console.log("Usted ha elegido Resident Evil 3, el precio es de 5 dólares");
            alert("Usted ha elegido Resident Evil 3, el precio es de 5 dólares");
            continuar = false
            break
        case 4:
            precioBase = 10;
            nombreSeleccionado = "Resident Evil 4";
            console.log("Usted ha elegido Resident Evil 4, el precio es de 10 dólares");
            alert("Usted ha elegido Resident Evil 4, el precio es de 10 dólares");
            continuar = false
            break
        default:
            console.log("Lo siento, no disponemos de ese videojuego en nuestro catálogo.");
}
}

const calcularImpuestoTarjeta = precioBase => {
let impuestoTarjeta = (precioBase * 21) / 100;
alert("El impuesto IVA de este videojuego es de " + impuestoTarjeta + " pesos.")
return impuestoTarjeta;
}

function calcularPrecioFinal(precioBase) {
let impuesto = calcularImpuestoTarjeta(precioBase);
let total = precioBase + impuesto;
alert("El precio final de este videojuego es de " + total + " pesos.")
return total;
}

function gracias(nombreSeleccionado) {
    console.log("Gracias por comprar " + nombreSeleccionado + ", esperemos que lo disfrutes!.")
    alert("Gracias por comprar " + nombreSeleccionado + ", esperemos que lo disfrutes!.")

}

let totalPagar = calcularPrecioFinal(precioBase);
gracias(nombreSeleccionado);

