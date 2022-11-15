// let user = prompt("Ingrese su nombre")
// saludarUsuario(user)

// function saludarUsuario(x){
//   alert(`Te damos la bienvenida ${user} ! esta es una tienda virtual`)
// }

// let producto = parseInt(prompt("¿Qué producto deseas comprar? 1.Miel - 2.Almendras - 3.Nueces - 4.Cereales - 5.Aceite de coco"))
// let totalCompra = 0
// let seguirComprado = true
// let eleccion

// while(seguirComprado === true){
//   if(producto===1){
//     totalCompra= totalCompra + 250
//   }else if(producto===2){
//     totalCompra= totalCompra + 200
//   }else if(producto===3){
//     totalCompra= totalCompra + 300
//   }else if(producto===4){
//     totalCompra= totalCompra + 150
//   }else if(producto===5){
//     totalCompra= totalCompra + 500
//   }else{
//     producto= parseInt(prompt("El número ingresado no es el correcto. Ingresa un producto de la lista: 1.Miel - 2.Almendras - 3.Nueces - 4.Cereales - 5.Aceite de coco"))
//     continue
//   }
//   eleccion=parseInt(prompt("Quieres seguir comprando: 1.Si - 2.No"))
//   if(eleccion===1){
//     producto = parseInt(prompt("Elige el producto que deseas comprar: 1.Miel - 2.Almendras - 3.Nueces - 4.Cereales - 5.Aceite de coco"))
//   }else {
//     seguirComprado=false
//   }
// }
// alert(`El total de tu compra es: $ ${totalCompra}`)


// Segunda Entrega

class Producto {
  constructor(nombre, precio, stock, disponibilidad, peso) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.disponibilidad = disponibilidad;
    this.peso = peso;
  }
  cambiarPrecio(precio) {
    this.precio = precio;
  }
  cambiarStock() {
    this.stock = --this.stock;
  }
}
// 1.Miel: 250
//- 2.Almendras: 200
// - 3.Nueces:300
//- 4.Cereales: 150
//- 5.Aceite de coco:500
const miel = new Producto("Miel", 300, 2, true, "500gr");
const almendras = new Producto("Almendras", 250, 100, false, "100gr");
const aceiteDeOliva = new Producto("Aceite de Oliva", 180, 200, true, "500ml");
const aceiteDeCoco = new Producto("Aceite de Coco", 380, 100, false, "400ml");

// Variables

let decision;
let total = 0;
let carrito = [];
let bandera = true;
let seguirComprando;

//
while (bandera === true) {
  decision = parseInt(
    prompt(`Ingresa producto que vas a comprar:
    1. Miel: 500gr x $300.
    2. Almendras: 100gr x $250.
    3. Aceite de Oliva: 500ml x $180.
    4. Aceite de Coco: 400ml x $380.`)
  );

  if (decision === 1) {
    carrito.push(miel.nombre);

    total = total + miel.precio;
    alert(`Compraste Miel. El precio es de $${miel.precio}.
    El total de tu compra hasta el momento es de: $${total}`);
    seguirComprando = confirm("Queres seguir comprando??");
    if (seguirComprando === false) {
      bandera = false;
    }
  } else if (decision === 2) {
    carrito.push(almendras.nombre);

    total = total + almendras.precio;
    alert(`Compraste almedras. El precio es de $${almendras.precio}.
    El total de tu compra hasta el momento es de: $${total}`);
    seguirComprando = confirm("Queres seguir comprando??");
    if (seguirComprando === false) {
      bandera = false;
    }
  } else if (decision === 3) {
    carrito.push(aceiteDeOliva.nombre);

    total = total + aceiteDeOliva.precio;
    alert(`Compraste una Aceite de Oliva. El precio es de $${aceiteDeOliva.precio}.
    El total de tu compra hasta el momento es de: $${total}`);
    seguirComprando = confirm("Queres seguir comprando??");
    if (seguirComprando === false) {
      bandera = false;
    }
  } else if (decision === 4) {
    carrito.push(aceiteDeCoco.nombre);

    total = total + aceiteDeCoco.precio;
    alert(`Compraste Aceite de Coco. El precio es de $${aceiteDeCoco.precio}.
    El total de tu compra hasta el momento es de: $${total}`);
    seguirComprando = confirm("Queres seguir comprando??");
    if (seguirComprando === false) {
      bandera = false;
    }
  } else {
    alert("Ingresa un numero correcto");
  }
}

  alert(`Lista de compras: ${carrito}.
  Tu compra total es de: $${total}`);





