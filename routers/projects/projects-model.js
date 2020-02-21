const db = require('../../data/db-config');

module.exports = {
    getProjects,
    addProject,
    getFullProjectById
}

// retrieving a list of projects.
function getProjects() {
    return db('projects')
}

// adding projects.
function addProject(project, id) {
    newProject = {...project, id}
    return db('projects')
    .insert(newProject)
}

// Add an endpoint for retrieving a project by its id that returns an object with the following structure:
/*
select p.*, t.*, r.*
from projects as p
join project_task as pt, pt.project_id, p.id
join tasks as t, t.id, pt.task_id
join project_resource as pr, pr.resource_id, r.id
join resources as r, r.id, pr.resource_id
where p.id, id

*/
function getFullProjectById(id) {
    return db('projects as p')
    .select('*')
    .join('project_task as pt', 'pt.project_id', 'p.id')
    .join('tasks as t', 't.id', 'pt.task_id')
    .join('project_resource as pr', 'pr.resource_id', 'r.id')
    .join('resources as r', 'r.id', 'pr.resource_id')
    .where('p.id', id)
}