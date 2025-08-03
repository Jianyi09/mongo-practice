const express = require('express');
const router = express.Router();
const contactoCtrl = require('../controllers/contactoController');

// Los endpoints ya usan '/contactos' como prefijo en index.js
router.post('/', contactoCtrl.crearContacto);
router.get('/', contactoCtrl.obtenerContactos);

module.exports = router;

