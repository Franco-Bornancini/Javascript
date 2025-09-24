// Funciones Constructoras y Almacenamiento

// Array
const conteiner = ["Auto", "Moto"]

// Objeto
// const task = {
//     id: 0,
//     description: "Tarea",
//     date: "24-09-2025",
//     state: "Pendiente",

// }

// Funcion constructora de tarea (ejemplo)
// Tranformamos a class (POO programacion orientada a objeto)
class task {
    constructor(id, description, date, state) {
        this.id = id;
        this.description = description;
        this.date = date;
        this.state = state;
    }
}

// new palabra reservada para una nueva tarea en este ejemplo
// const task1 = new task(1, "Compras", "24-09-2025", "Pendiente");


class taskList{
    constructor(){
        this.tasks = [];
    }

    // metodo para agregar tareas al listado
    addTask(newTask) {
        this.tasks.push(newTask);
    }

    // metodo para guardar en el localstorage
    saveInLocalStorage(){
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }

    // metodo para traer las tareas
    getTasksLocalStorage(){
        const tasksInStorage = localStorage.getItem("tasks");

        // validamos que exista la tarea (o el item)
        if(tasksInStorage){
            // si existe que me lo guarde con "parse" en tareas
            this.tasks = JSON.parse(tasksInStorage);
        }else{
            console.log("no existe nignuna tarea");
        }
    }
}

// GENERACION DE MI LISTA DE TAREAS
const myTaskList = new taskList()
myTaskList.getTasksLocalStorage()

// hacemos una condicion para que cuando se recarge la pagina no cargue siempre las tareas,
// sino tendriamos repetido las tareas
if(myTaskList.tasks.length === 0){
    // CREAMOS UNA TAREA
    const task1 = new task(1, "Compras", "24-09-2025", "Pendiente");
    const task2 = new task(2, "Correr", "24-09-2025", "Pendiente");

    // AGREGAMOS TAREA AL LISTADO
    myTaskList.addTask(task1)
    myTaskList.addTask(task2)
}

myTaskList.saveInLocalStorage()

console.log(myTaskList)