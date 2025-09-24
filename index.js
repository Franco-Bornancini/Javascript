// const suma = (a,b) => {
//     valor = a + b
//     console.log("la suma es", valor)
// }
// suma()

// const employes = [
//     {
//         name: "Franco",
//         age: 25,
//         categori: "RRHH"
//     },
//     {
//         name: "Juan",
//         age: 25,
//         categori: "Tecnica"
//     },
//     {
//         name: "Mariano",
//         age: 25,
//         categori: "Conduccion"
//     },
//     {
//         name: "Azul",
//         age: 25,
//         categori: "Taller"
//     }
// ]


// let busqueda = prompt("RRHH\nTaller\nTecnica\nConduccion\n Area a buscar: ")

// const area = employes.filter(employe => employe.categori == busqueda)

// let name_busqueda = prompt("Nombre del usuario a buscar: ")

// const user_encontrado = area.find(user => user.name == name_busqueda)

// if(user_encontrado){
//     console.log("usuario encontrado: ", user_encontrado)
// }else{
//     console.log("no se encontro el usuario.")
// }


// let number_menu = 1
// while(number_menu !== 0){

//     let busqueda = prompt("RRHH\nTaller\nTecnica\nConduccion\n Area a buscar: ")

//     const area = employes.filter(employe => employe.categori == busqueda)

//     let name_busqueda = prompt("Nombre del usuario a buscar: ")

//     const user_encontrado = area.find(user => user.name == name_busqueda)

//     if(user_encontrado){
//         console.log("usuario encontrado: ", user_encontrado)
//     }else{
//         console.log("no se encontro el usuario.")
//     }

//     let op = prompt("Ingrese la opcion del menu\n 1. Volver a consultar\n 0. Salir")
//     number_menu = parseInt(op)
// }


const palabras = ['manzana', 'banana', 'cereza', 'damasco', 'Kiwi'];

const palabrasConA = palabras.filter(function(palabra) {
    return palabra.includes('i');
});

console.log(palabrasConA)