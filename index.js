let user = prompt("Ingrese su nombre")
saludarUsuario(user)

function saludarUsuario(x){
  alert(`Te damos la bienvenida ${user} ! esta es una tienda virtual`)
}

let producto = parseInt(prompt("¿Qué producto deseas comprar? 1.Miel - 2.Almendras - 3.Nueces - 4.Cereales - 5.Aceite de coco"))
let totalCompra = 0
let seguirComprado = true
let eleccion

while(seguirComprado === true){
  if(producto===1){
    totalCompra= totalCompra + 250
  }else if(producto===2){
    totalCompra= totalCompra + 200
  }else if(producto===3){
    totalCompra= totalCompra + 300
  }else if(producto===4){
    totalCompra= totalCompra + 150
  }else if(producto===5){
    totalCompra= totalCompra + 500
  }else{
    producto= parseInt(prompt("El número ingresado no es el correcto. Ingresa un producto de la lista: 1.Miel - 2.Almendras - 3.Nueces - 4.Cereales - 5.Aceite de coco"))
    continue
  } 
  eleccion=parseInt(prompt("Quieres seguir comprando: 1.Si - 2.No"))
  if(eleccion===1){
    producto = parseInt(prompt("Elige el producto que deseas comprar: 1.Miel - 2.Almendras - 3.Nueces - 4.Cereales - 5.Aceite de coco"))
  }else {
    seguirComprado=false
  }
}
alert(`El total de tu compra es: $ ${totalCompra}`)


// 1.Miel: 250
//- 2.Almendras: 200
// - 3.Nueces:300 
//- 4.Cereales: 150 
//- 5.Aceite de coco:500