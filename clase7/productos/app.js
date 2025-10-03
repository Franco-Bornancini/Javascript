// traemos el formulario por ID
const form = document.getElementById("productForm")
const container = document.getElementById("productContainer")
let productId = 1;
let products = []


// obtenemos los valores con el evento del boton
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("productText").value;
    const price = document.getElementById("productPrice").value;
    const description = document.getElementById("productDescription").value;

    // guardamos los valores en un objeto
    const product = {
        id: productId++,
        name: name,
        price: price,
        description: description,
    }
    
    // guardamos el producto en un array
    products.push(product)
    // renderizamos el product con la funcion
    renderProduct(product)
    // resetamos el valores del formulario
    form.reset()
})

const renderProduct = ((product) => {
    const productDiv = document.createElement("div")
    // id seteado en el producto
    productDiv.dataset.id = product.id

    productDiv.innerHTML = `
        <div>
            <p><strong>${product.name}</strong> - ${product.price}</p>
            <p>${product.description}</p>
            <button>Eliminar</button>
        </div>
    `

    // identificamos el boton
    productDiv.querySelector("button").addEventListener("click",() => {
        deleteProduct(product.id)
    })

    container.appendChild(productDiv)
})

const deleteProduct = ((id) => {
        products = products.filter((product) => product.id != id)

        const productDiv = container.querySelector(`[data-id = "${id}"]`)

        if(productDiv){
            productDiv.remove()
        }
    }
)
