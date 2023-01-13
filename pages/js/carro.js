const contenedor = document.querySelector(".carrito")

let infoDelLs = JSON.parse(localStorage.getItem("carrito"))

infoDelLs.forEach(( prod ) => {
    const card = document.createElement("div")
    card.innerHTML = `
    <p>${prod.nombre}</p>
    </div>
    <div class="carrito__prod">
    <img src="${prod.img}" alt="${prod.nombre}">
    </div>
    <h3>$${prod.precio}</h3>
    <div class="carrito__botones">
    <button id="boton-${prod.id}" class="btnCompra"><p>BORRAR DEL CARRITO</p></button>
    </div>
    </div>`
    contenedor.appendChild(card) 
    })

    function borrarDelCarrito (array) {
        const botonAniadir = document.querySelectorAll(".btnCompra")    
        botonAniadir.forEach( boton => {
            boton.onclick = () => {
                const id = boton.id.slice(6)            
                const filtrarProducto = array.filter((elemento, i) => {
                    return elemento.id != Number(id)
                })
                infoDelLs = filtrarProducto
                localStorage.setItem("carrito", JSON.stringify(infoDelLs))
                console.log(infoDelLs)    
                borrarDelCarrito(infoDelLs)       
            }
        })
    }
    borrarDelCarrito(infoDelLs)
    
    const botonCatalogo = `<a class="nav-link" href="./catalogo.html">No hay productos en el carrito, si desea comprar haga click aquí</a>`

    const botonBorrarCarrito = document.querySelector("#borrar-productos")
    
    botonBorrarCarrito.onclick = () => {
        localStorage.removeItem("carrito")
        document.querySelector(".carrito").innerHTML = `${botonCatalogo}`;
    }


    console.log(infoDelLs.length)
