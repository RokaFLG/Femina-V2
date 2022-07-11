
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
}*/
// 2do Desafio
/*function credito(final, cuotas){
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
arrayProductos[j++]= new Producto("Chanchito",1000,9);
arrayProductos[j++]= new Producto("Elefante",800,12);
arrayProductos[j++]= new Producto("Lobo",1200,5);


function seleccionCarrito(peluche) {
  switch (peluche) {
    case 0:
      if (arrayProductos[peluche].stock < 1) {
        alert("no mas Chanchitos no disponible, stocks nuevos cada semana o comunicarse directametne para mayor rapides");  
      } else {
        
        agregarCarrito(arrayProductos[peluche],arrayCarrito);

        alert("Chanchito agregado al carrito");
        console.log("Elefante agregado al carrito");
      }
      console.log(arrayCarrito);
  
      /*
      a = new Carrito (arrayProductos[peluche].nombre,arrayProductos[peluche].precio,arrayProductos[peluche].cantidad+1);
      flag++;
      if (a.flag) {        
        arrayCarrito.push(a);
      } else {        
      }
      arrayCarrito.push(arrayProductos[peluche]);
      console.log(arrayProductos[peluche].precio); 
      arrayProductos[peluche].stock--;   
      console.log("----------------------");     
      console.log(arrayCarrito.length);
      */ 
      break;
    case 1:
      if (arrayProductos[peluche].stock < 1) {
        alert("no mas Elefantes no disponible, stocks nuevos cada semana o comunicarse directametne para mayor rapides");  
      } else {
        
        agregarCarrito(arrayProductos[peluche],arrayCarrito);
        
        alert("Elefante agregado al carrito");
        console.log("Elefante agregado al carrito");
      }
      console.log(arrayCarrito);
      
      break;
    case 2:
      
      if (arrayProductos[peluche].stock < 1) {
        alert("no mas Elefantes no disponible, stocks nuevos cada semana o comunicarse directametne para mayor rapides");  
      } else {
        
        agregarCarrito(arrayProductos[peluche],arrayCarrito);
        
        alert("Lobo agregado al carrito");
        console.log("Lobo agregado al carrito");
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

    console.log("Los productos del carrito son:");
    for (let index = 0; index < arrayCarrito.length; index++) {
      console.log("-"+arrayCarrito[index].nombre)
    } 
    alert(`El total de su compra es: $${(calculaCompra().toFixed(2))}`);  
}
function reiniciar(){
    
    arrayCarrito =[];
    console.log("------------------------------");
   
}

