const express = require('express');
const router = express.Router();
const contactoCtrl = require('../controllers/contactoController');

router.post('/', contactoCtrl.crearContacto);
router.get('/', contactoCtrl.obtenerContactos);

module.exports = router;

