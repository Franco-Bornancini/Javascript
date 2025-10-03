

// construccion de una promesa

// const inPromise = new Promise((resolve, reject) => {
//     // PENDIENTE
//     console.log("Estado pendiente")

//     // DESPUES DE 3 SEGUNDOS TENEMOS LA RESPUESTA DE LOS PARAMETROS
//     setTimeout(() => {
//         const exito = true;

//         if(exito){
//             resolve("Promesa cumplida")
//         }else{
//             reject("Promesa rechazada")
//         }
//     }, 3000)
// })

// // LLAMAMOS LA PROMESA CON ESTAS DOS FUNCIONES
// inPromise.then((resultado) =>{
//     console.log("ESTADO DE LA PROMESA")
//     console.log("Resultado: ", resultado)
// })
// .catch((reject) => {
//     console.log("ESTADO DE LA PROMESA")
//     console.log("Resultado: ", reject)
// })

// =========================== async await ============================================


const prepararCafe = (() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = Math.random() > 0.5;

            if(exito){
                resolve("Promesa cumplida")
            }else{
                reject("Promesa rechazada")
            }
        }, 3000)
    })    
})

const obtenerCafe = async () => {
    try{
        const cafe = await prepararCafe();
        console.log(`tu cafe ya esta listo ${cafe}`)
    } catch (error){
        console.log(`Error ${error}`)
    }
}

obtenerCafe()