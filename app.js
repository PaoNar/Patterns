const express = require('express');

const app = new express();
const PORT = 3000;
const Ducks = require('./models/ducks');

app.get("/", (req, res) => {
    res.send("Hola Estos son Patos")
})

app.get("/duck", (req, res) => {
    const duck = new Ducks();
    res.send(duck.mallardDuck());
})

app.get("/duckGum", (req, res) => {
    const duck = new Ducks();
    res.send(duck.woodDuck());
})

app.listen(PORT, () => {
    console.log("Servidor en el puerto: " + PORT)
})
