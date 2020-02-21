const express = require('express');

const Resource = require('./resources-model');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const resources = await Resource.getResources()
        res.json(resources)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Failed to get the resources' })
    }
})

router.post('/', async (req, res) => {
    try {
        const newResource = req.body
        const resource = await Resource.addResource(newResource)
        res.json(resource)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Failed to add new resource' })
    }
})

module.exports = router;