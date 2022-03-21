const express = require('express');
const router = express.Router();
const apiProducts = require('../../controllers/apis/productsControllerApi')


//Listado de Productos
router.get('/',apiProducts.list)


module.exports=router;