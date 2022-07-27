/*let nombre = "lucas "
let apellido = "chauque "
let edad = 19

if (nombre == "lucas ")
console.log("mi nombre es " + nombre + apellido + "y mi edad es " + edad + " años") 
*/

//conversor de dolar a pesos arg
/*let conversion = prompt("ingrese USD a cambiar por ARS");
let total = "su total de dolres es " + conversion * 285;
alert (total)
*/

/*
for (let i = 0; i < 10; i++){
    console.log(i+0);
}
*/
//calculadora
/*
let ingresarNumero = parseInt(prompt("Ingresar Numero"));
for (let i = 1; i <= 10; i++){
    let resultado = ingresarNumero * i;
    console.log(ingresarNumero +" X "+ i +" = "+ resultado)
}*/
/*for(let i = 1 ; i <= 5 ; i++){
    let ingresarNombre = prompt("Ingresar Nombre");
    console.log("Turno N° " + i + " Nombre y Apellido:" + ingresarNombre + " " + ingresarApellido)
}
*/
/*
//intentando hacer un conversor de divisas
//con falsa alerta de segruridad
for( let i = 0 ; i <= 5 ; i++){
    let usuario = prompt("ingrese usuario");
    let conversion = prompt("ingrese USD a cambiar por ARS");
    let total =  usuario + " su total de pesos arg es "+( conversion * 285 )+"$";
    console.log(total)
    if (i == 2){
        console.log("Parada de seguridad " + (i+1) +" para el usuario" )
        break;
    }
}
*/
/*
let user =prompt("Ingresar User")
let password =prompt("Ingresar Password")
while (user != "ESC"){
    switch (user){
        case "Lucas":
        alert ("Bienvenido Lucas");
        break;

        case "Pablo":
        alert ("Bienvenido Pablo");
        break;

        default:
        alert("¿Quien sos?");
        break;
    }
    user = prompt("Ingresar un nombre de usuario")
}
*/
/*
let precioMonitor = 5500;
let precioTeclado = 3500;
let precioMouse = 1550;
let precioAudifonos = 1330;
let precioGabinete = 3755;

let envio = 2500;
let total = 0;

const addTotal = (item) => total +=item;
const descuento = x => (x - (x * 20) /100);

let comprar = prompt("Ingresar producto a comprar").toLowerCase();
    while(comprar !="salir"){
        switch(comprar){
            case "monitor":
                addTotal(precioMonitor);
                break;
            case "teclado":
                addTotal(precioTeclado);
                break;
            case "mouse":
                addTotal(precioMouse);
                break;
            case"audifonos":
                addTotal(precioAudifonos);
                break;
            case"gabinete":
                addTotal(precioGabinete);
                break;
            default:
                alert("Ingrese, un producto valido");
                break;
        }
        comprar=prompt("¿Desea seguir comprando? Para finalizar la compra escriba 'salir', para continuar elija otro producto.")
    }

if (total > 0){
    let finish = prompt("El total de su compra es $" +total +" ¿quiere agregar envio?");
    
    if(finish == "si"){
        addTotal(envio);
        alert("Por su primer compra tiene un cupón de descuento");
        alert("Su precio final es de $"+descuento(total)+" ,gracias por elegirnos! Su envío estará llegando en 7 dias")
    }
    else{
        alert("Puede pasar a retirar su pedido por nuestra sucursal, su total es $"+total)
    }
}
*/

const precio=[5500,3500,1550,1330,3755];
function precios(array){
    let largoArray=array.length
    let resultado= 0;
    for(let i = 0 ;i<largoArray;i++){
        console.log(array[i])
    }
}
const producto = ["monitor","teclado","mouse","audifonos","gabinete"];
function productos(array) {
    let largoArray=array.length;
    let resultado = 0;
    for(let i = 0 ;i<largoArray; i++){
        console.log(array[i]);
    }
}
let resultado1= producto[0] +" " + precio[0];
let resultado2= producto[1] +" " + precio[1];
let resultado3= producto[2] +" " + precio[2];
let resultado4= producto[3] +" " + precio[3];
let resultado5= producto[4] +" " + precio[4];

productos(producto)
precios(precio)
console.log(producto,precio)
console.log(resultado1)
console.log(resultado2)
console.log(resultado3)
console.log(resultado4)
console.log(resultado5)