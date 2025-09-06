console.log("hola")

people = [
    {
        name: "Juan",
        age: 25,
        category: "administracion"
    },
    {
        name: "Maria",
        age: 25,
        category: "it"
    },
    {
        name: "Pedro",
        age: 25,
        category: "tecnico"
    },
    {
        name: "Ariel",
        age: 25,
        category: "soporte"
    },
    {
        name: "Lucia",
        age: 25,
        category: "administracion"
    }
]

const search_name = (name, staff) => {
    let person = staff.find(user => user.name === name)
    return console.log(person)
}

const search_category = (category, staff) => {
    let person = staff.find(user => user.category === category)
    return alert(person)
}


const menu = 1

while(menu ==!0){
    const menu = prompt('1 - Buscar por nombre\n2 - Buscar por categoria\n3 - Mostrar personal\n0 - Finalizar');

    if(menu == 1){
        const name_search = prompt('Ingrese el nombre a buscar');
        search_name(name_search, people)
    }

}