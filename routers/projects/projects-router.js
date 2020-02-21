const express = require('express');

const Project = require('./projects-model');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const projects = await Project.getProjects()
        res.json(projects)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Failed to get the projects' })
    }
});

router.get('/:id/tasks', async (req, res) => {
    const { id } = req.params
    try {
        const project = await Project.getFullProjectById(id)
        res.json(project)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Failed get project by id' })
    }
})

router.post('/', async (req, res) => {
    try {
        const newProject = req.body
        const project = await Project.addProject(newProject)
        res.json(project)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Failed to add new project' })
    }
})

module.exports = router;