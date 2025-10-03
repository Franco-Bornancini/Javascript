const titulo = document.getElementById("titulo")
console.log(titulo.textContent)

// instertando html desde JS
const contenedor1 = document.getElementById("contenedor-1")

const myArray = [1, 2, 3, 4, 5, 6, 7, 8]

contenedor1.innerHTML = myArray.map((elemento) => `
    <p>${elemento}</p>
`)

// QUERYSELECTOR
// me trae el primer componente con el parametro pasado
// const contenedor3 = document.querySelector(".contenedor-3")

// me trae todas las etiquetas que tienen el parametro pasado
const contenedor3 = document.querySelectorAll(".contenedor-3")
console.log(contenedor3)

// CREAR ELEMENTO HTML E INSERTARLO

const contenedorDiv = document.getElementById("contenedorDiv");

// creacion del elemento
const div = document.createElement("div");

// le agregamos texto
div.textContent = "Dom y Eventos";

// lo agregamos al html
contenedorDiv.appendChild(div);

// EVENTOS

contenedorDiv.addEventListener("click", () => {
    alert("hiciste click en este contenedor")
})