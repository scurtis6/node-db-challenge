const db = require('../../data/db-config');

module.exports = {
    getResources,
    addResource
}

// retrieving a list of resources.
function getResources() {
    return db('resources')
}

// adding resources.
function addResource(resource, id) {
    newResource = {...resource, id}
    return db('resources')
    .insert(newResource)
}
