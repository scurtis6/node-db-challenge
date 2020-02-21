const db = require('../../data/db-config');

module.exports = {
    getProjects,
    addProject
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
