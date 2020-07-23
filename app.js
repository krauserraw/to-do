const argv = require('./config/yargs').argv; // importamos el yargs
const toDo = require('./to-do/to-do');
const colors = require('colors');

let command = argv._[0];

switch (command) {
    case 'create':
        let task = toDo.create(argv.description);
        console.log(argv.description);
        break;
    case 'list':
        let list = toDo.getList();
        list.forEach((tarea, index) => {
            console.log(`=========To Do ${index +1 }=========`.green);
            console.log(tarea.description);
            console.log(`Estado: ${tarea.completed}`);
            console.log('========================='.green);
        });
        break;
    case 'update':
        let update = toDo.update(argv.description, argv.completed);
        console.log(update);
        break;
    case 'delete':
        let deleteTask = toDo.deleteTask(argv.description);
        console.log(deleteTask);
        break;
    default:
        console.log('unrecognized command');
}