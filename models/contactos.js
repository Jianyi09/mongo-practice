const mongoose = require('mongoose');

const contactosSchema = new mongoose.Schema({
  nombre: String,
  telefono: String,
  email: String
});

module.exports = mongoose.model('Contacto', contactosSchema);
