const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.get('', (req, res) => {
    res.json([{
        title: 'home',
        text: 'hello to my personal website'
    }])
})

app.get('/projects', (req, res) => {
    res.json([{
        title: 'projects',
        text: 'this is my projects page'
    }])
})

app.listen(port, () => {
    console.log(`Server running on Port ${port}`)
})