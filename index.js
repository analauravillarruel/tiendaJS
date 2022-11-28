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

// class Producto {
//   constructor(nombre, precio, stock, disponibilidad, peso) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.stock = stock;
//     this.disponibilidad = disponibilidad;
//     this.peso = peso;
//   }
//   cambiarPrecio(precio) {
//     this.precio = precio;
//   }
//   cambiarStock() {
//     this.stock = --this.stock;
//   }
// }
// // 1.Miel: 250
// //- 2.Almendras: 200
// // - 3.Nueces:300
// //- 4.Cereales: 150
// //- 5.Aceite de coco:500
// const miel = new Producto("Miel", 300, 2, true, "500gr");
// const almendras = new Producto("Almendras", 250, 100, false, "100gr");
// const aceiteDeOliva = new Producto("Aceite de Oliva", 180, 200, true, "500ml");
// const aceiteDeCoco = new Producto("Aceite de Coco", 380, 100, false, "400ml");

// // Variables

// let decision;
// let total = 0;
// let carrito = [];
// let bandera = true;
// let seguirComprando;

// //
// while (bandera === true) {
//   decision = parseInt(
//     prompt(`Ingresa producto que vas a comprar:
//     1. Miel: 500gr x $300.
//     2. Almendras: 100gr x $250.
//     3. Aceite de Oliva: 500ml x $180.
//     4. Aceite de Coco: 400ml x $380.`)
//   );

//   if (decision === 1) {
//     carrito.push(miel.nombre);

//     total = total + miel.precio;
//     alert(`Compraste Miel. El precio es de $${miel.precio}.
//     El total de tu compra hasta el momento es de: $${total}`);
//     seguirComprando = confirm("Queres seguir comprando??");
//     if (seguirComprando === false) {
//       bandera = false;
//     }
//   } else if (decision === 2) {
//     carrito.push(almendras.nombre);

//     total = total + almendras.precio;
//     alert(`Compraste almedras. El precio es de $${almendras.precio}.
//     El total de tu compra hasta el momento es de: $${total}`);
//     seguirComprando = confirm("Queres seguir comprando??");
//     if (seguirComprando === false) {
//       bandera = false;
//     }
//   } else if (decision === 3) {
//     carrito.push(aceiteDeOliva.nombre);

//     total = total + aceiteDeOliva.precio;
//     alert(`Compraste una Aceite de Oliva. El precio es de $${aceiteDeOliva.precio}.
//     El total de tu compra hasta el momento es de: $${total}`);
//     seguirComprando = confirm("Queres seguir comprando??");
//     if (seguirComprando === false) {
//       bandera = false;
//     }
//   } else if (decision === 4) {
//     carrito.push(aceiteDeCoco.nombre);

//     total = total + aceiteDeCoco.precio;
//     alert(`Compraste Aceite de Coco. El precio es de $${aceiteDeCoco.precio}.
//     El total de tu compra hasta el momento es de: $${total}`);
//     seguirComprando = confirm("Queres seguir comprando??");
//     if (seguirComprando === false) {
//       bandera = false;
//     }
//   } else {
//     alert("Ingresa un numero correcto");
//   }
// }

//   alert(`Lista de compras: ${carrito}.
//   Tu compra total es de: $${total}`);


//TERCERA PRE-ENTREGA

//clase producto
class Producto{
  constructor(id,nombre,precio,imagen){
    this.id=id
    this.nombre=nombre
    this.precio=precio
    this.imagen=imagen
  }
}

//creacion de productos
const producto1 = new Producto(1,`Aceite de Coco`, 500,"./image/aceitedecoco.jpg")
const producto2 = new Producto(2,`Aceite de Oliva`, 300,"./image/aceitedeoliva.jpg")
const producto3 = new Producto(3,`Yogur Neutro`, 180,"./image/yogur.jpg")
const producto4 = new Producto(4,`Granola`, 600,"./image/granola.jpg")
const producto5 = new Producto(5,`Avena`, 700,"./image/avena.jpg")
const producto6 = new Producto(6,`Cereal`, 200,"./image/cereal.jpg")
const producto7 = new Producto(7,`Leche de Almendra`, 400,"./image/lechedealmendra.jpg")
const producto8 = new Producto(8,`Pan Integral`, 550,"./image/panintegral.jpg")
const producto9 = new Producto(9,`Te verde`, 120,"./image/teverde.jpg")
const producto10 = new Producto(10,`Fideos integrales`, 650,"./image/fideosintegrales.jpg")

//array Productos
const productos = [
  producto1,
  producto2,
  producto3,
  producto4,
  producto5,
  producto6,
  producto7,
  producto8,
  producto9,
  producto10,
]

const divProductos = document.getElementById(`divProductos`)
productos.forEach(producto=>{
  divProductos.innerHTML += `
  <div id="${producto.id}" class="card cardProduct">
  <img src=${producto.imagen}
  <div class= "card-body">
  <h4 class= "card-title">${producto.nombre}</h4>
  <p class="card-text">${producto.precio}</p>
  <button id=${producto.id} class="btn btn-primary">Agregar</button>
  </div>
  </div> 
  `
})

//carrito de compra
const carrito = JSON.parse(localStorage.getItem('carrito')) ||[]
const botonesAgregar = document.querySelectorAll('.btn-primary')
botonesAgregar.forEach(boton=>{
  boton.onclick=() => {
    const productoSeleccionado =productos.find(prod=>prod.id===parseInt(boton.id))

    const productoCarrito = {...productoSeleccionado,cantidad:1}

    const indexCarrito = carrito.findIndex( (prod) => prod.id === productoCarrito.id)
    if(indexCarrito === -1){
      carrito.push(productoCarrito)
    }else{
      carrito[indexCarrito].cantidad++
    }

    localStorage.setItem('carrito', JSON.stringify(carrito))
    //console.log(carrito)
  }
})

//FINALIZANDO COMPRA
const botonFinalizar = document.querySelector('#finalizar')
botonFinalizar.onclick = () => {
  const valores = carrito.map(prod=>prod.precio * prod.cantidad)
  let totalCompra = 0
  valores.forEach(valor=>{
    totalCompra += valor
  })
  console.log(valores)
  console.log(totalCompra)
}