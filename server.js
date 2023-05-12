const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

// Add dotenv
require("dotenv").config();

// Mongoose info
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

// Middleware
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());
app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});
app.use(express.urlencoded({ extended: false }));

// Data
const Pokemon = require("./models/pokemon");

// Routes...

app.get("/", (req, res) => {
  res.send(
    'Welcome to the Pokemon App!<br/><br/><a href="http://localhost:3000/pokemon">See All...</a>'
  );
});

// Index : Show all the things! - GET /fruits

app.get("/pokemon", (req, res) => {
  Pokemon.find({}, (error, allPokemon) => {
    res.render("Index", { pokemon: allPokemon });
  });
});

// New : An empty form for a new thing - GET /fruits/new
app.get("/pokemon/new", (req, res) => {
  res.render("New");
});

// Delete : Get rid of this particular thing! - DELETE /fruits/:id
// Update : Update this specific thing with this updated form - PUT /fruits/:id
// Create : Make a new thing with this filled out form - POST /fruits

app.post("/pokemon/", (req, res) => {
  Pokemon.create(req.body, (error, createdPokemon) => {
    res.redirect("/pokemon");
  });
});

// Edit : A prefilled form to update a specific thing - GET /fruits/:id/edit
// Show : Show me this one thing! - GET /fruits/:id (edited)

app.get("/pokemon/:id", (req, res) => {
  Pokemon.findById(req.params.id, (err, foundPokemon) => {
    res.render("Show", {
      pokemon: foundPokemon,
    });
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
