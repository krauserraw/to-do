const fs = require('fs');

let listToDo = [];

const saveDB = () => {
    let data = JSON.stringify(listToDo);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar');
    });
}

const readDB = () => {
    try {
        listToDo = require('../db/data.json');
    } catch (error) {
        listToDo = [];
    }
}

const create = (description) => {
    readDB();

    let toDo = {
        description,
        completed: false
    };

    listToDo.push(toDo);

    saveDB();

    return toDo;
}

const getList = () => {
    readDB();
    return listToDo;
}

const update = (description, completed = true) => {
    readDB();

    let index = listToDo.findIndex(tarea => tarea.description = description);

    if (index > -1) {
        listToDo[index].completed = completed;
        saveDB();
        return true;
    } else {
        return false;
    }
}

const deleteTask = (description) => {
    readDB();

    let newList = listToDo.filter(task => {
        return task.description !== description;
    });

    if (newList.length === listToDo.length) {
        return false;
    } else {
        listToDo = newList;
        saveDB();
        return true;
    }
}

module.exports = {
    create,
    update,
    deleteTask,
    getList
}