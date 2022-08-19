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

let tienda = document.getElementById("tienda");

let miCarrito = document.getElementById("miCarrito");

let verCarrito = document.getElementById("verCarrito");

let cerrarCarrito = document.getElementById("cerrarCarrito");

let verTotal = document.getElementById("verTotal");
verTotal.style.display ="block";

let totalContenido = document.getElementById("totalContenido");

let carrito =[];

const productos = [
    {
    producto:"monitor",
    precio: 5500,
    img:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzspdZYxUOzkPhyNXfSFRNGYq5ZJ8rHMD9Xg&usqp=CAU"
},{
    producto:"teclado",
    precio:3500,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3TKy8rU4atJSm2ykEp7PgSlwOexEVKWCv2w&usqp=CAU"
},{
    producto:"mouse",
    precio:1550,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt8tpmO8wzUxHV_Xb4HWTXR0ztAfK0Dv2OWw&usqp=CAU"
},{
    producto:"audifonos",
    precio:1330,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqMfjU0SABGjqC-42elKc25ei6hjM9e-5PIQ&usqp=CAU"
},{
    producto:"gabinete",
    precio:3995,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIL3jBmFLKU6cpdRtUrzmw68QPrhZ2_QCaIw&usqp=CAU"
}];

productos.forEach((producto) =>{
    let contenido = document.createElement("div");
    contenido.innerHTML = `
    <img src="${producto.img}">
    <h3>${producto.producto}</h3>
    <h3>$${producto.precio}</h3>
    `;
    tienda.append(contenido);

    let comprar = document.createElement("button");

    comprar.className ="comprar";
    comprar.innerText ="comprar";

    contenido.appendChild(comprar);

    comprar.addEventListener("click",() =>{
        carrito.push({
            producto:producto.producto,
            precio:producto.precio,
            img: producto.img,
        })
        console.log(carrito)
    })

   })

verCarrito.addEventListener("click",()=>{
    verTotal.style.display ="block";
    miCarrito.style.display = "block";
    miCarrito.innerHTML = "";
    carrito.forEach((producto)=>{
        let contenidoCarrito = document.createElement("div");
        contenidoCarrito.className = "contenidoCarrito";

        contenidoCarrito.innerHTML=`
        <img src="${producto.img}">
        <h3>${producto.producto}</h3>
        <h3>$${producto.precio}</h3>
        `;

        miCarrito.append(contenidoCarrito);
    })
})

cerrarCarrito.addEventListener("click",()=>{
    verTotal.style.display ="none";
    miCarrito.style.display ="none";
    totalContenido.style.display ="none";
})

verTotal.addEventListener("click",()=>{
    totalContenido.innerHTML = "";
    const total = carrito.reduce((acc,el)=>acc + el.precio,0);
    let totalContenidoElement = document.createElement("h2");
    totalContenidoElement.innerHTML = Swal.fire({
        title: 'Su total es $',
        showClass: {
        popup: 'animate__animated animate__fadeInDown'
    },
        hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
  }

    }) ;
    totalContenido.append(totalContenidoElement);
});