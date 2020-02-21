const express = require('express');

const Task = require('./tasks-model');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const tasks = await Task.getTasks()
        res.json(tasks)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Failed to get the tasks' })
    }
});

router.get('/:id/tasklist', async (req, res) => {
    const { id } = req.params;
    
    try {
        const list = await Task.getTaskList(id)
        res.json(list)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Failed to get project tasks' })
    }
})

router.post('/', async (req, res) => {
    try {
        const newTask = req.body
        const task = await Task.addTask(newTask)
        res.json(task)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Failed to add new task' })
    }
});

module.exports = router;