const express = require('express');
// let routesIndex = require('./routes/index');

const app = express();

// midleware
 
app.get('/', (req, res) => {

    res.statusCode = 200;
    res.setHeader('content-type', 'text/html');
    res.sendFile(__dirname + './public/index.html')

})

app.listen(3000, 'localhost', () => {

    console.log('Servidor Rodando na porta 5000');

})