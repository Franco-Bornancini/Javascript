// setItem permite enviar datos al storage
localStorage.setItem("nombre", "Franco");

// getItem traemos el dato que buscamos
const name = localStorage.getItem("nombre")

console.log(name)

// -------Removemos el dato que queremos por su valor "key"
// localStorage.removeItem("nombre")

// -------Eliminamos todos los valores
// localStorage.clear() 


const persona1 = {
    name: "Franco",
    age: 25,
    country: "Cordoba",
}

// stringify 
localStorage.setItem("persona", JSON.stringify(persona1))
// parse
const personStorage = JSON.parse(localStorage.getItem("persona"))
console.log(personStorage)