const prodDesc = producto.filter(( elemento ) => {
    return elemento.oferta==true
})

const ceras = producto.filter((elemento) => {
    return elemento.tipo=="cera"
})

const pomadas = producto.filter((elemento) => {
    return elemento.tipo=="pomada"
})

const busquedaPorletra = document.querySelector("#buscador")
const cera = document.querySelector("#categoriaCera")
const pomada = document.querySelector("#categoriaPomada")
const desc = document.querySelector("#btndesc")
const todos = document.querySelector("#todosLosProductos")
const contenedor = document.querySelector(".carrito")
const contenedor2 = document.querySelector(".prodConDescuento")
const contenedor3 = document.querySelector(".cera")
const contenedor4 = document.querySelector(".pomada")
const vistaCarrito = document.querySelector(".vistaPreviaCarrito")
contenedor2.style.display= "none"
contenedor3.style.display= "none"
contenedor4.style.display= "none"

let carrito = []

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
        <button id="boton-${prod.id}" class="btnCompra"><p>AGREGAR</p></button>
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
                    <button id="boton-${prod.id}" class="btnCompra"><p>AGREGAR</p></button>
                </div>
                </div>`
                contenedor4.appendChild(card) 
                })


                const botonComprar = document.querySelectorAll(".btnCompra")

                botonComprar.onclick = () => {
                    producto.push(carrito) 
                    console.log(carrito)
                }

                
    todos.onclick = () => {      
    contenedor.style.display = "grid" 
    contenedor2.style.display = "none" 
    contenedor3.style.display = "none" 
    contenedor4.style.display = "none" 
        }


    desc.onclick = () => {      
    contenedor.style.display = "none" 
    contenedor3.style.display = "none" 
    contenedor4.style.display = "none" 
    contenedor2.style.display = "grid" 
    }

    cera.onclick = () => {      
        contenedor.style.display = "none" 
        contenedor2.style.display = "none" 
        contenedor3.style.display = "grid" 
        contenedor4.style.display = "none" 
        }

    pomada.onclick = () => {      
        contenedor.style.display = "none"
        contenedor2.style.display = "none"
        contenedor3.style.display = "none"
        contenedor4.style.display = "grid" 
        }



function aniadirAlCarrito (array) {
    const botonAniadir = document.querySelectorAll(".btnCompra")    
    botonAniadir.forEach( boton => {
        boton.onclick = () => {
            const id = boton.id.slice(6)
            const filtrarProducto = array.find((elemento) => {
                return elemento.id === Number(id)
            })
            carrito.push(filtrarProducto)   
            console.log(carrito)
            localStorage.setItem("carrito", JSON.stringify(carrito))   
        }
    })
}
aniadirAlCarrito(producto)
