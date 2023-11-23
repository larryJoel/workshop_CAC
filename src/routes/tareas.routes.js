const express =  require('express');
const router = express.Router();
const tareasController = require('../controllers/tareas.Controller.js');

router.get('/', tareasController.index)

module.exports = router;