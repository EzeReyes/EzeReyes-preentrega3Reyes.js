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

const cardHtml = ( array,c ) => {
    const generarNodos = array.reduce(( acc, element) => {
        return acc + `
            <div class="card" id="producto-${element.id}">
                <div class="container-img">
                    <img src=${element.img} alt=${element.name}>
                </div>                
                <h3>
                    ${element.name}
                </h3>
                <h3>
                    ${element.precio}
                </h3>
                <button id="boton-${element.id}" class="btnCompra">
                    Agregar del carrito
                </button>
            </div>
        `
    }, "")

    document.querySelector(c).innerHTML = generarNodos
}
cardHtml(producto,".carrito")
cardHtml(prodDesc,".prodConDescuento")
cardHtml(ceras,".cera")
cardHtml(pomadas,".pomada")

    todos.onclick = () => { 
        contenedor.style.display = "grid" 
        contenedor2.style.display = "none" 
        contenedor3.style.display = "none" 
        contenedor4.style.display = "none"
    }


    desc.onclick = () => {      
    contenedor.style.display = "none" 
        contenedor2.style.display = "grid" 
        contenedor3.style.display = "none" 
        contenedor4.style.display = "none"
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

        const contador = document.querySelector("#contadorCarrito")

        function contadorCarro () {
            if (carrito.length === 0) {
                contador.innerText.style.display=none
            }
            else {
                contador.innerText = carrito.length
            }
        }



function aniadirAlCarrito (array) {
    const botonAniadir = document.querySelectorAll(".btnCompra")    
    botonAniadir.forEach( boton => {
        boton.onclick = () => {
            const id = boton.id.slice(6)
            const filtrarProducto = array.find((elemento) => {
                return elemento.id === Number(id)
            })
            const repeat = carrito.some((repeatproduct) => repeatproduct.id === filtrarProducto.id)
            console.log(repeat)
            if (repeat) {
                carrito.map((prod) => {
                    if(prod.id === filtrarProducto.id){
                        prod.cantidad ++;
                    }
                })
            } else{
            carrito.push(filtrarProducto)   }
            console.log(carrito)
            contadorCarro()
            localStorage.setItem("carrito", JSON.stringify(carrito))   
        }
    })
}
aniadirAlCarrito(producto)


const productosElegidos = JSON.parse(localStorage.getItem("carrito"))
carrito = productosElegidos || []
