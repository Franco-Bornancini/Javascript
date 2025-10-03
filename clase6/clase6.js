//  Funciones del orden superior

const sumar = (a, b) => {
    return(a + b)
}

const restar = (a, b) => {
    return(a - b)
}

const division = (a, b) => {
    return(a / b)
}

const multiplicacion = (a, b) => {
    return(a * b)
}

const calcular = (a, b, operacion) => {
    return(operacion(a, b))
}




console.log("Suma:", calcular(10, 5, sumar)) // 15
console.log("Divison:",calcular(10, 2, division)) // 5
console.log("Multiplicacion:",calcular(10, 2, multiplicacion)) // 20
console.log("Resta:", calcular(10, 5, restar)) // 5

// escribiendo "for" y en su derecha seleccionando la opcion loop, nos da el siguiente codigo ya pre armado
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// myArray.forEach((element) => {
//     console.log(element)
// })

// ejemplo de un forEach a mano
// // const porCadaUno = ((arr, functionInferior) => {
// //     for(const elemento of arr){
// //         functionInferior(elemento)
// //     }
// // })

// // porCadaUno(myArray, console.log)


const myArray = [1,2,3,4,5,6,7,8,9,10,15,18,20]

// Find va a devolver el primer valor que cumpla la condicion
const numberMayTen = myArray.find((elemento) => elemento > 10)
console.log(numberMayTen)

// Filter me trae todos los valores que cumplan con la condicion, creando un nuevo array
const numbersMayten = myArray.filter((elemento) => elemento > 10)
console.log(numbersMayten)

const cursos = [
    {nombre: "JavaScript", precio: 40000},
    {nombre: "React", precio: 80000},
    {nombre: "Desarrollo Web", precio: 100000},
    {nombre: "Backend", precio: 150000},
]

// Filtramos y guardamos los cursos que sean menor en precio a 100.000
const cursosBarato = cursos.filter(curso => curso.precio < 100000)
console.log(cursosBarato)
// Recorremos el array con un .map y mostramos solo la propiedad nombre del curso
cursosBarato.map((elemento) => console.log(elemento.nombre))

// ".some" devuelve true o false
const hayReact = cursos.some((curso) => curso.nombre === "React")
console.log(hayReact)
