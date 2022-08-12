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
/*
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

let envio = 2500;
let total = 0;

const addTotal = (productos) => total += productos;
const descuento = x =>(x-(x*20)/100);


let comprar = prompt("Ingresar producto a comprar").toLowerCase();
    while(comprar != "salir"){
        switch(comprar){
            case "monitor":
                addTotal(producto[0]);
                break;
            case "teclado":
                    addTotal(producto[1]);
                    break;
            case "mouse":
                    addTotal(producto[2]);
                    break;
            case"audifonos":
                    addTotal(producto[3]);
                    break;
            case"gabinete":
                    addTotal(producto[4]);
                    break;
            default:
                    alert("Ingrese, un producto valido");
                    break;
        }
        comprar=prompt("¿Desea seguir comprando? Para finalizar la compra escriba 'salir', para continuar elija otro producto")
    }

if ( total > 0){
        let finish = prompt("el total de su compra es $" +total + "¿quiere agregar envio?");
    
    if(finish == "si" ){
        addTotal(envio);
        alert("Por su primer compra tiene un cupón de descuento");
        alert("Su precio final es de $"+descuento(total)+" ,gracias por elegirnos! Su envio estará llegando en 7 dias");
    }
    else{
        alert("Puede pasar a retirar su pedido por nuestra sucursal, su total es $"+total);
    }
}
*/
/*
const producto = ["monitor","teclado","mouse","audifonos","gabinete"];
function productos(array) {
    //let largoArray=array.length;
    let resultado = 0;
    for(let i = 0 ;i<largoArray; i++){
        console.log(array[i]);
    }
}
*/
const precioProducto = [
    {id:0,
    producto:"monitor",
    precio: 5500
},{
    id:1,
    producto:"teclado",
    precio:3500
},{
    id:2,
    producto:"mouse",
    precio:1550
},{
    id:3,
    producto:"audifonos",
    precio:1330
},{
    id:4,
    producto:"gabinete",
    precio:3995
}];

const addTotal = (item) => total +=item;

const precios =precioProducto.map((el) => el.precio);
console.log(precios)
console.log(addTotal)

const producto1 = precios[0];
const producto2 = precios[1];
const producto3 = precios[2];
const producto4 = precios[3];
const producto5 = precios[4];
const misPrecios =JSON.stringify(precios)
const misCompras = JSON.stringify(misCompras)

localStorage.setItem("miProducto",misPrecios);
localStorage.setItem("miCompra",miJson)

const miCompra =[];

let comprar = document.getElementById("btn-1");
let boton_1 =document.getElementById("btn-1")
boton_1.addEventListener("click",respuestaClick);
function respuestaClick(){
    console.log("click")
    //if (respuestaClick.apply(null,[miCompra]));
}

const total=miCompra.reduce((acc,el)=> acc +el.precio,0)
console.log(total)
console.log(document.getElementById("btn-1"))