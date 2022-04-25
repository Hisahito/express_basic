// Usando objeto express 
const express = require('express');
// App de Express
const app = express();
// Puerto en que vamos a ver nuestra app localhost:3000
const port = 3000;


// Path inicial, respondera a la URL localhost:3000
app.get('/', (req, res) => {
    res.send('Hola mundo');
})

// Respondiendo texto 
// localhost:3000/launchX

app.get('/launchx', (req, res) => {
    res.send('Bienvenidos a launchX');
})

// Regresando un objeto 
// localhost:3000/explorersInNode
app.get('/explorersInNode', (req, res) => {
    const explorer = {name: 'Explorer1', msg: 'Hola mundo'};
    res.send(explorer);
})

// Query params: Recibir parameto por URL
// http://localhost:3000/explorers/hisahito
// req.params = {explorerName: 'hisahito'}
app.get('/explorers/:explorerName', (req, res) => {
    res.send(req.params)
})



// Con esto inicializamos nuestra app
app.listen(port, () => {
    console.log(`Example app listening on port: ${port}`);
})