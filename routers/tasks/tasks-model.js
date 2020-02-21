const db = require('../../data/db-config');

module.exports = {
    getTasks,
    addTask,
    getTaskList
}

// retrieving a list of tasks.
function getTasks() {
    return db('tasks')
}

// adding tasks.
function addTask(task, id) {
    newTask = {...task, id}
    return db('tasks')
    .insert(newTask)
}

// retrieving a list of tasks. The list of tasks should include the project name and project description.
/* 
select p.project_name, p.project_description, t.*(description, notes, completed)
from project_task as pt
inner join projects as p on p.id = pt.project_id
inner join tasks a t on t.id = pt.task_id
where t.id = id 
order by t.id */

function getTaskList(id) {
    return db('project_task as pt')
    .select('t.*', 'p.project_name', 'p.project_description')
    .innerJoin('projects as p', 'p.id', 'pt.project_id')
    .innerJoin('tasks as t', 't.id', 'pt.task_id')
    .where('t.id', id)
    .orderBy('t.id')
}
