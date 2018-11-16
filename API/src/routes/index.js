const express = require('express');
const router = express.Router();

var pizzas = [
    {"id":"1", "nombre":"deluxe", "desc":"condimentada","ingredientes":{"ing1":"salchicha", "ing2":"pimiento", "ing3":"cebolla"}, "masa":"panPizza", "tamaño":"grande", "porciones":12, "extraqueso":true},
    {"id":"2", "nombre":"hawaiana", "desc":"sabor tropical","ingredientes":{"ing1":"jamón", "ing2":"piña"}, "masa":"delgada", "tamaño":"mediana", "porciones":8, "extraqueso":false},
    {"id":"3", "nombre":"margarita", "desc":"vegetariana","ingredientes":{"ing1":"tomate", "ing2":"albahaca"}, "masa":"panPizza", "tamaño":"pequeña", "porciones":6, "extraqueso":true}
]; 
var nuevoId = 4; 

router.get('/pizzas', (req, res) => {
    res.send(pizzas);
});

router.get('/pizzas/:id', (req, res) => {
    var id = req.params.id;

    for (var pizzasIndex in pizzas){
        var pizza = pizzas[pizzasIndex];
        if (pizza.id === id){            
            break;
        }
    }
    res.send(pizza);
});

router.post('/pizzas', (req, res) => {
let nombre = req.body.nombre;
let desc = req.body.desc;
let ingredientes = req.body.ingredientes;
let masa = req.body.masa;
let tamaño = req.body.tamaño;
let porciones = req.body.porciones;
let extraqueso = req.body.extraqueso;

pizzas.push({"id":nuevoId.toString(), "nombre":nombre, "desc":desc,"ingredientes":ingredientes, "masa":masa, "tamaño":tamaño, "porciones":porciones, "extraqueso":extraqueso});
nuevoId++;
res.status(200).json({
    message: "pizza agregada"
    })
});

router.put('/pizzas/:id', (req,res) => {
    var id = req.params.id;

    for (var pizzasIndex in pizzas){
        var pizza = pizzas[pizzasIndex];
        if (pizza.id === id){
            pizzas.splice(pizzasIndex,1);
            let nombre = req.body.nombre;
            let desc = req.body.desc;
            let ingredientes = req.body.ingredientes;
            let masa = req.body.masa;
            let tamaño = req.body.tamaño;
            let porciones = req.body.porciones;
            let extraqueso = req.body.extraqueso;
            pizzas.push({"id":id, "nombre":nombre, "desc":desc,"ingredientes":ingredientes, "masa":masa, "tamaño":tamaño, "porciones":porciones, "extraqueso":extraqueso});
            break;
        }
    }
    res.send("pizza actualizada")
});

router.delete('/pizzas/:id',(req,res)=>{
    var id = req.params.id;

    for (var pizzasIndex in pizzas){
        var pizza = pizzas[pizzasIndex];
        if (pizza.id === id){
            pizzas.splice(pizzasIndex,1);
            break;
        }
    }
    res.send("pizza borrada")
});

module.exports = router;