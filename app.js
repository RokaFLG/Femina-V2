
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


