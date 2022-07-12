
// 1er Desafio
/*let entrada= prompt("Ingrese texto o ESC para finalizar")
let texto=" "
while (entrada!= "ESC" && entrada != "esc") {
    texto +=entrada + " "
    entrada= prompt("Intrese texto o ESC para finalizar")
  }
alert(texto)
for (let pio=1;pio<=10;pio++){
  if(pio===5){
    continue;
  }
  alert(`El valor de pio es ${pio}`);
}
// 2do Desafio
function credito(final, cuotas){
  switch(cuotas){
    case "1":
            console.log("Ha seleccionado la opcion de 2 cuotas")
            case "2":
              console.log("Ha seleccionado la opcion de 4 cuotas")
              final = final * 1.1; 
              break;
             case "3":
               console.log("Ha seleccionado la opcion de 6 cuotas")
               case "4":
                 console.log("Ha seleccionado la opcion de 12 cuotas")
                 final = final * 1.2;
                 break;
                 case "5":
                   console.log("Ha seleccionado la opcion de 24 cuotas")
                   case "6":
                      console.log("Ha seleccionado la opcion de 36 cuotas")
                      final = final *1.4;
                      break;
                      default: 
                      alert("Cuotas no validas")
                    }
                    return final;
                  }
                  let cuota = prompt(
    `Porfavor seleccione una cantidad de cuotas:
    1: 2 Cuotas
2: 4 Cuotas
3: 6 Cuotas
4: 12 Cuotas
5: 24 Cuotas
6: 36 Cuotas`
)
const total = credito (15000, cuota);
alert(`Su total a pagar es de ${total.toFixed(2)}pesos`);
*/
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
let j=0;
arrayProductos[j++]= new Producto("Taza Magica",1200,15);
arrayProductos[j++]= new Producto("Taza con dibujo",850,25);
arrayProductos[j++]= new Producto("Taza con Foto",700,35);


function seleccionCarrito(taza) {
  switch (taza) {
    case 0:
      if (arrayProductos[taza].stock < 1) {
        alert("Se ha agotado el producto de Taza Magica, Si tiene dudas o consultas comuniquese con el centro de atencion al cliente");  
      } else {
        
        agregarCarrito(arrayProductos[taza],arrayCarrito);

        alert("Taza Magica ha sido comprada");
        console.log("Taza Magica ha sido comprada");
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
    for (let index = 0; index < arrayCarrito.length; index++) {
      console.log("-"+arrayCarrito[index].nombre)
    } 
    alert(`Debera pagar un total de: $${(calculaCompra().toFixed(2))}`);  
}
function reiniciar(){
    
    arrayCarrito =[];
    console.log("------------------------------");
   
}
