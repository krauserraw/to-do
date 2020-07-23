const description = { demand: true, alias: 'd', desc: 'Description for the task to do' };
const completed = { alias: 'c', default: true, desc: 'Description for the task to do' };

const argv = require('yargs')
    .command('create', 'create one item to do', { description })
    .command('update', 'update the status of a task', { description, completed })
    .command('delete', 'delete a task from the list', { description })
    .help()
    .argv;

module.exports = {
    argv
}