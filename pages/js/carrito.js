/* PROFE EL INCONVENIENTE SE ENCUENTRA AL MOMENTO DE REALIZAR EL CLICK EN EL BOTON DESC, DEBERÍA CARGAR AL DOM LOS PRODUCTOS CON DESCUENTO, PERO ME SUMA LOS PRODUCTOS CON DESCUENTO AL ARRAY DE PRODUCTOS */
/* FILTRA PRODUCTOS CON DESCUENTO */
const prodDesc = producto.filter(( elemento ) => {
    return elemento.oferta==true
})

const ceras = producto.filter((elemento) => {
    return elemento.tipo=="cera"
})

const pomadas = producto.filter((elemento) => {
    return elemento.tipo=="pomada"
})

const cera = document.querySelector("#categoriaCera")
const pomada = document.querySelector("#categoriaPomada")
const desc = document.querySelector("#btndesc")
const todos = document.querySelector("#todosLosProductos")
const contenedor = document.querySelector(".carrito")
const contenedor2 = document.querySelector(".prodConDescuento")
const contenedor3 = document.querySelector(".cera")
const contenedor4 = document.querySelector(".pomada")
contenedor2.style.display= "none"
contenedor3.style.display= "none"
contenedor4.style.display= "none"


    producto.forEach(( prod ) => {
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
        contenedor.appendChild(card) 
        })
        
        prodDesc.forEach(( prod ) => {
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
            contenedor2.appendChild(card) 
            })

        ceras.forEach(( prod ) => {
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
            contenedor3.appendChild(card) 
            })

            pomadas.forEach(( prod ) => {
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
                contenedor4.appendChild(card) 
                })

    todos.onclick = () => {      
    contenedor.style.display = "grid" 
        }


    desc.onclick = () => {      
    contenedor.style.display = "none" 
    contenedor2.style.display = "grid" 
    }

    cera.onclick = () => {      
        contenedor.style.display = "none" 
        contenedor2.style.display = "none" 
        contenedor3.style.display = "grid" 
        }

    pomada.onclick = () => {      
        contenedor.style.display = "none"
        contenedor2.style.display = "none"
        contenedor3.style.display = "none"
        contenedor4.style.display = "grid" 
        }


/* let carrito =[]

const botonAgregarAlCarrito = document.querySelector(".btnCompra")

/*FUNCION AGREGAR AL CARRITO /*  
const agregarAlCarrito = (prodId) => {
    const item = producto.find((prod) => 
    prodId === prod.id)
    agregarAlCarrito.push(item)
}

 */ 