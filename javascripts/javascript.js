let tienda = document.getElementById("tienda");

let miCarrito = document.getElementById("miCarrito");

let verCarrito = document.getElementById("verCarrito");

let cerrarCarrito = document.getElementById("cerrarCarrito");

let verTotal = document.getElementById("verTotal");
verTotal.style.display ="block";

let totalContenido = document.getElementById("totalContenido");

let carrito =[];

const fetchData = async () => {
    const response = await fetch("../json/data.json");
    const productos = await response.json();
    console.log(productos);

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
            title: 'Su total es $' + total,
            showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
            hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
      }
    
        }) ;
        totalContenido.append(totalContenidoElement);
    });
    
}

fetchData();
