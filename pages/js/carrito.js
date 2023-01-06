/* PROFE EL INCONVENIENTE SE ENCUENTRA AL MOMENTO DE REALIZAR EL CLICK EN EL BOTON DESC, DEBERÍA CARGAR AL DOM LOS PRODUCTOS CON DESCUENTO, PERO ME SUMA LOS PRODUCTOS CON DESCUENTO AL ARRAY DE PRODUCTOS */
/* FILTRA PRODUCTOS CON DESCUENTO */
const prodDesc = producto.filter(( elemento ) => {
    return elemento.oferta==true
})

const desc = document.querySelector("#btndesc")

const contenedor = document.querySelector(".carrito")

const mostrarProducto = (p) => { p.forEach(( prod ) => {
    const card = document.createElement("div")
        card.innerHTML = `
        <p>${prod.nombre}</p>
        </div>
        <div class="carrito__prod">
        <img src="${prod.img}" alt="${prod.nombre}">
        </div>
        <h3>$${prod.precio}</h3>
        <div class="carrito__botones">
            <button class="btnCompra"><p>${prod.id}AGREGAR</p></button>
        </div>
        </div>`
        contenedor.append(card) 
    })
}
mostrarProducto(producto)

desc.addEventListener("click",mostrarProducto(prodDesc))

let carrito =[]

const botonAgregarAlCarrito = document.querySelector(".btnCompra")

/* 
/*FUNCION AGREGAR AL CARRITO /*  
const agregarAlCarrito = (prodId) => {
    const item = producto.find((prod) => 
    prodId === prod.id)
    agregarAlCarrito.push(item)
}

 */