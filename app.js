
let arrayProductos=[];
let arrayCarrito =[];
let peluche;


class Producto{
    constructor(nombre, precio, stock) {
        this.precio = precio;
        this.stock = stock;
        this.nombre = nombre;
    }
}
class Carrito{
  constructor(nombre, precio) {
      this.precio = precio;
      this.nombre = nombre;
  }
}

arrayProductos.push(new Producto("Taza Magica",1200,2));
arrayProductos.push(new Producto("Taza con dibujo",850,4));
arrayProductos.push(new Producto("Taza con Foto",700,6));


function seleccionCarrito(taza) {
  switch (taza) {
    case 0:
      if (arrayProductos[taza].stock < 1) {
        alert("Se ha agotado el producto de Taza Magica, Si tiene dudas o consultas comuniquese con el centro de atencion al cliente");  
      } else {
        
        agregarCarrito(arrayProductos[taza],arrayCarrito);

        alert("Taza Magica ha sido comprada");
       const tazas= ["Taza Magica ha sido comprada"]

       const tazaMagica= JSON.stringify(tazas)
       localStorage.setItem("tazas",tazaMagica)
      }
      console.log(arrayCarrito);

      break;
    case 1:
      if (arrayProductos[taza].stock < 1) {
        alert("Se ha agotado el producto de Taza con Dibujo, Si tiene dudas o consultas comuniquese con el centro de atencion al cliente");  
      } else {
        
        agregarCarrito(arrayProductos[taza],arrayCarrito);
        
        alert("Taza con Dibujo ha sido comprada");
        console.log("Taza con Dibujo ha sido comprada");
      }
      console.log(arrayCarrito);
      
      break;
    case 2:
      
      if (arrayProductos[taza].stock < 1) {
        alert("Se ha agotado el producto de Taza con foto, Si tiene dudas o consultas comuniquese con el centro de atencion al cliente");  
      } else {
        
        agregarCarrito(arrayProductos[taza],arrayCarrito);
        
        alert("Taza con foto ha sido comprada");
        console.log("Taza con foto ha sido comprada");
      }
      console.log(arrayCarrito);
      
      break;
    default:
        alert("error de producto")
      break;
  }
}

function agregarCarrito(objeto,arrayCarrito) {

  let n =objeto.nombre
  let p =objeto.precio;
  const a = new Carrito(n,p);
  arrayCarrito.push(a);
}

function calculaCompra(){
  let monto=0;
    for (let index = 0; index < arrayCarrito.length; index++) {
      monto+= arrayCarrito[index].precio;
    }
    return monto;
}

function finalizar() {

    console.log("Los productos seleccionados son:");
   arrayCarrito.forEach(e=> {
    console.log(`-${e.nombre}`)
   })
    alert(`Debera pagar un total de: $${(calculaCompra().toFixed(2))}`);  
}
function reiniciar(){
    
    arrayCarrito =[];
    console.log("------------------------------");
   
}

