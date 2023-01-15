let infoDelLs = JSON.parse(localStorage.getItem("carrito"))
let contador = document.querySelector("#contadorCarrito")
contador.innerText = infoDelLs.length
const contenedorCarrito = document.querySelector(".containerCarrito")

function totalCompra () {
    let sumaTotal = infoDelLs.reduce((acu,element) => acu + element.precio,0)
    console.log(sumaTotal)
    document.querySelector("#total").innerHTML = `Total de su compra: ${sumaTotal}`
    }
    totalCompra()

function buscarCantidad (array) {
    let cantidad = array.includes((element) => {
        element.nombre })
    console.log(cantidad)
    console.log(infoDelLs)
}
buscarCantidad(infoDelLs)

const cardHtml = ( array ) => {
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
                <h3>
                    Cantidad: ${element.cantidad}
                </h3>
                <button id="boton-${element.id}" class="btnBorrar">
                    Borrar
                </button>
            </div>
        `
    }, "")

    document.querySelector(".containerCarrito").innerHTML = generarNodos
}
cardHtml(infoDelLs || [] )




function borrarDelCarrito (array) {
        const botonEliminar = document.querySelectorAll(".btnBorrar")    
        botonEliminar.forEach(boton => {
            boton.onclick = () => {
                const id = boton.id.slice(6)            
                const filtrarProducto = array.filter((elemento,i) => {
                    return elemento.id != Number(id)
                })
                infoDelLs = filtrarProducto
                localStorage.setItem("carrito", JSON.stringify(infoDelLs))
                console.log(infoDelLs.length)
                cardHtml(infoDelLs)
                borrarDelCarrito(infoDelLs)
                contador.innerText = infoDelLs.length
                totalCompra()
            }
        })
    }
borrarDelCarrito(infoDelLs)  
      
const botonCatalogo = `<a class="nav-link" href="./catalogo.html">No hay productos en el carrito, si desea comprar haga click aquí</a>`

    const botonBorrarCarrito = document.querySelector("#borrar-productos")
    
    botonBorrarCarrito.onclick = () => {
        localStorage.removeItem("carrito")
        document.querySelector(".containerCarrito").innerHTML = `${botonCatalogo}`;
    }


/*     console.log(infoDelLs.length)

       const productosIguales = infoDelLs.filter((prod) => {
       return prod.id === prod.id})             
       console.log(productosIguales)
    
       totalCompra()
    
  */

