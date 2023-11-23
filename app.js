const express = require('express');
const app = express();
const tareas = require('./src/routes/tareas.routes.js');
const ejs = require('ejs');

const port = 4000;

//leer mis archivos publicos
app.use(express.static('public'));

//configuración de ejs
app.set('view engine', 'ejs');
app.set('views','./src/views');

app.use(tareas)

app.listen(port,()=>{
    console.log("Corriendo el servidor en el puerto http://localhost: "+port);
} )