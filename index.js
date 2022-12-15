//PROYECTO FINAL

//Llamado al json con async
const consultarProductos = async () => {
  const response = await fetch("../productos.json");
  const productos = await response.json();
  return productos;
};
//Productos
const productos = consultarProductos();
const productosContainer = document.querySelector(".productos__container");
const countCarrito= document.querySelector("#countCarrito");
const btnFinalizar= document.querySelector("#btn-finalizar");

const catAceites = document.querySelector("#aceites");
const catCereales = document.querySelector("#cereales");
const catFrutosSecos = document.querySelector("#frutos-secos");
const catBebibles = document.querySelector("#bebibles");
const catPanes = document.querySelector("#panes");
const catInfusiones = document.querySelector("#infusiones");
const catFideos = document.querySelector("#fideos");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//Mostrar todos los productos:
consultarProductos().then((productos) => {
  productos.forEach((producto) => {
    productosContainer.innerHTML += `<div class="producto__card" >
    <h3>${producto.nombre.substring(0, 30)}...</h3>
    <img src="${producto.imagen}" />
    <div>
    <p class="curso__price">$${producto.precio}</p>
    <a href='#' class='btn-primary agregar-favorito' id='${
      producto.id
    }'>Comprar</a>
    </div>
  </div>`;
  });
  btnComprar(productos);
});

// Buscar por categoria:
function buscarCategoria(marca) {
  productosContainer.innerHTML = "";
  consultarProductos().then((productos) => {
    productos = productos.filter((x) => x.marca === marca);
    productos.forEach((y) => {
      productosContainer.innerHTML += `<div class="producto__card" >
      <h3>${y.nombre.substring(0, 30)}...</h3>
      <img src="${y.imagen}" />
      <div>
      <p class="curso__price">$${y.precio}</p>
      <a href='#' class='btn-primary agregar-favorito' id='${y.id}'>Comprar</a>
      </div>
      
    </div>`;
    });
    btnComprar(productos);
  });
}

// Poner funcion en los botones de comprar:
function btnComprar(productos) {
  const btnAgregar = document.querySelectorAll(".agregar-favorito");
  btnAgregar.forEach((btn) => {
    btn.onclick = (e) => {
      e.preventDefault();
      const productoSeleccionado = productos.find(
        (prod) => prod.id === parseInt(btn.id)
      );
      const productoCarrito = { ...productoSeleccionado, cantidad: 1 };
      const indexCarrito = carrito.findIndex(
        (prod) => prod.id === productoCarrito.id
      );
      if (indexCarrito === -1) {
        carrito.push(productoCarrito);
      } else {
        carrito[indexCarrito].cantidad++;
      }
      actualizarCarrito();
      imprimirCarrito();
      localStorage.setItem("carrito", JSON.stringify(carrito));
      btnFinalizar.style.display = "block";
    };
  });
}

// Mostrar el constador del carrito:
function actualizarCarrito() {
  countCarrito.innerHTML = carrito.length;
}

// Mostrar lista de carritos
function imprimirCarrito() {
  listaCarrito.innerHTML = "";
  carrito.forEach(
    (item) =>
      (listaCarrito.innerHTML += `<li><div><img src="${item.imagen}" /> ${
        item.nombre
      } x ${item.cantidad}</div> <div>$${
        item.cantidad * item.precio
      }<i class='bx bxs-trash' data-id='${item.id}'></i></div></li>`)
  );
  if (carrito !== []) {
    const btnEliminar = document.querySelectorAll(".bxs-trash");
    btnEliminar.forEach((btn) => {
      btn.onclick = (e) => {
        const productoId = e.target.getAttribute("data-id");
        carrito = carrito.filter((prod) => prod.id != productoId);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        actualizarCarrito();
        imprimirCarrito();
      };
    });
  }
  crearTotal();
}

// Crear el total de la compra
function crearTotal() {
  sumatotal = 0;
  carrito.forEach((producto) => {
    sumatotal += producto.precio * producto.cantidad;
  });
  const total = document.querySelector("#total");

  sumatotal !== 0
    ? (total.innerHTML = `<span>El total es de $${sumatotal}</span>`)
    : (total.innerHTML = `El carrito esta vacio`);
}

function finalizarCompra() {
  swal(
    "Compra realizada con exito",
    "Recibirá los datos de la compra por mail",
    "success"
  );
  carrito = [];
  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarCarrito();
  imprimirCarrito();
  btnFinalizar.style.display = "none";
}

/* EVENTOS */

catAceites.addEventListener("click", () => buscarCategoria("aceites"));
catBebibles.addEventListener("click", () => buscarCategoria("bebibles"));
catCereales.addEventListener("click", () => buscarCategoria("cereales"));
catFideos.addEventListener("click", () => buscarCategoria("fideos"));
catFrutosSecos.addEventListener("click", () => buscarCategoria("frutos-secos"));
catInfusiones.addEventListener("click", () => buscarCategoria("infusiones"));
catPanes.addEventListener("click", () => buscarCategoria("panes"));

btnFinalizar.addEventListener("click", finalizarCompra);

/* LLAMADO A FUNCIONES */

actualizarCarrito();
imprimirCarrito();













//clase producto
// class Producto{
//   constructor(id,nombre,precio,imagen){
//     this.id=id
//     this.nombre=nombre
//     this.precio=precio
//     this.imagen=imagen
//   }
// }

//creacion de productos
// const producto1 = new Producto(1,`Aceite de Coco`, 500,"./image/aceitedecoco.jpg")
// const producto2 = new Producto(2,`Aceite de Oliva`, 300,"./image/aceitedeoliva.jpg")
// const producto3 = new Producto(3,`Yogur Neutro`, 180,"./image/yogur.jpg")
// const producto4 = new Producto(4,`Granola`, 600,"./image/granola.jpg")
// const producto5 = new Producto(5,`Avena`, 700,"./image/avena.jpg")
// const producto6 = new Producto(6,`Cereal`, 200,"./image/cereal.jpg")
// const producto7 = new Producto(7,`Leche de Almendra`, 400,"./image/lechedealmendra.jpg")
// const producto8 = new Producto(8,`Pan Integral`, 550,"./image/panintegral.jpg")
// const producto9 = new Producto(9,`Te verde`, 120,"./image/teverde.jpg")
// const producto10 = new Producto(10,`Fideos integrales`, 650,"./image/fideosintegrales.jpg")

//array Productos
// const productos = [
//   producto1,
//   producto2,
//   producto3,
//   producto4,
//   producto5,
//   producto6,
//   producto7,
//   producto8,
//   producto9,
//   producto10,
// ]

// const divProductos = document.getElementById(`divProductos`)
// productos.forEach(producto=>{
//   divProductos.innerHTML += `
//   <div id="${producto.id}" class="card cardProduct">
//   <img src=${producto.imagen}
//   <div class= "card-body">
//   <h4 class= "card-title">${producto.nombre}</h4>
//   <p class="card-text">${producto.precio}</p>
//   <button id=${producto.id} class="btn btn-primary">Agregar</button>
//   </div>
//   </div> 
//   `
// })

//carrito de compra
//const botonesAgregar = document.querySelectorAll('.btn-primary')
// botonesAgregar.forEach(boton=>{
//   boton.onclick=() => {
//     const productoSeleccionado =productos.find(prod=>prod.id===parseInt(boton.id))

//     const productoCarrito = {...productoSeleccionado,cantidad:1}

//     const indexCarrito = carrito.findIndex( (prod) => prod.id === productoCarrito.id)
//     if(indexCarrito === -1){
//       carrito.push(productoCarrito)
//     }else{
//       carrito[indexCarrito].cantidad++
//     }

//     localStorage.setItem('carrito', JSON.stringify(carrito))
//     //console.log(carrito)
//   }
// })

// //FINALIZANDO COMPRA
// const botonFinalizar = document.querySelector('#finalizar')
// botonFinalizar.onclick = () => {
//   const valores = carrito.map(prod=>prod.precio * prod.cantidad)
//   let totalCompra = 0
//   valores.forEach(valor=>{
//     totalCompra += valor
//   })
//   console.log(valores)
//   console.log(totalCompra)
// }