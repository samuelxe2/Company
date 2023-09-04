const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // El puerto en el que escuchará el servidor

// Conexión a la base de datos MongoDB (reemplaza la URL con tu propia configuración)
mongoose.connect('mongodb://localhost:27017/Cliente', { useNewUrlParser: true })
  .then(() => {
    console.log('Conexión a MongoDB establecida correctamente');
  })
  .catch((err) => {
    console.error('Error de conexión a MongoDB:', err);
  });

// Modelo de datos para la colección "cliente" en la base de datos "Cliente"
const Cliente = mongoose.model('cliente', {
  nombre: String,
  apellido: String,
  correo: String,
  // Agrega otros campos según tus necesidades
});

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(bodyParser.json());

// Ruta para guardar datos en MongoDB
app.post('/api/guardar-datos', async (req, res) => {
  try {
    // Los datos enviados por el cliente están disponibles en req.body
    const { nombre, apellido, correo } = req.body;

    // Crear un nuevo documento de cliente
    const nuevoCliente = new Cliente({
      nombre,
      apellido,
      correo,
      // Agrega otros campos aquí según el modelo
    });

    // Guardar el cliente en la base de datos "Cliente" en la colección "cliente"
    await nuevoCliente.save();

    res.json({ mensaje: 'Datos de cliente guardados correctamente en MongoDB' });
  } catch (error) {
    console.error('Error al guardar datos en MongoDB:', error);
    res.status(500).json({ error: 'Error al guardar datos en MongoDB' });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
