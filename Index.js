// Importamos Express desde la carpeta node_modules
const express = require('express');

// Creamos la aplicación de Express
const app = express();
//Variable de jugadores
const jugadores = [];

class jugador {
  constructor(id){
    this.id = id
  }
}

// Escojemos un puerto por el que el servidor web escuchará
const port = 8080;

// Página para visualizar el mensaje "¡Hola Express!"
app.get('/unirse', (req, res) => {
    const id = `${Math.random()}`

    const jugador = new jugador(id)

    jugadores.push(jugador)
    res.send(id);
});

// Activamos el servidor en el puerto 3000
app.listen(port, () => {
  console.log(`¡Servidor listo!`);
});