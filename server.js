const express = require('express')
const app = express()
const port = 3000

// Data
const pokemon = require('./models/pokemon')

// Middleware
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())

// Routes...

app.get('/', (req, res)=>{
    res.send('Welcome to the Pokemon App!')
})

// Index : Show all the things! - GET /fruits

app.get('/pokemon', (req, res)=>{
    res.render('Index', {pokemon: pokemon})
})

// New : An empty form for a new thing - GET /fruits/new
// Delete : Get rid of this particular thing! - DELETE /fruits/:id
// Update : Update this specific thing with this updated form - PUT /fruits/:id
// Create : Make a new thing with this filled out form - POST /fruits
// Edit : A prefilled form to update a specific thing - GET /fruits/:id/edit
// Show : Show me this one thing! - GET /fruits/:id (edited)

app.get('/pokemon/:id', (req, res)=>{
    res.send(req.params.id)
})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})