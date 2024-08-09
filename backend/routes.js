const express = require('express')
const router = express.Router()

// get all todos

router.get('/todos', (req, res) => {
    res.status(200).json({ message : "GET REQUEST TO /api/todos" });
})

// post all todo
router.post('/todos', (req, res) => {
    res.status(201).json({ message: "POST REQUEST TO /api/todos"});
})
// put all todo

router.put('/todos/:id', (req, res) => {
    res.status(200).json({ message: "PUT REQUEST TO /api/todos/:id" })
})
// delete todo

router.delete('/todos/:id', (req, res) => {
    res.status(200).json({ message: "DELETE REQUEST TO /api/todos/:id" })
})

module.exports = router;