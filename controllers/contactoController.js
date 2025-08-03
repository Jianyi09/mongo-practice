const Contacto = require("../models/contactos");

exports.crearContacto = async (req, res) => {
  try {
    const nuevo = new Contacto(req.body);
    const guardado = await nuevo.save();
    res.status(201).json(guardado);
  } catch (err) {
    res.status(400).json({ error: 'Error al crear el contacto' });
  }
};

exports.obtenerContactos = async (req, res) => {
  try {
    const lista = await Contacto.find();
    res.json(lista);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener los contactos' });
  }
};
