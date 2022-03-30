const express= require('express');
const router= express.Router();
const path = require('path');


/*Con esta variable llamo a mi archivo localizado en la carpeta CONTROLLER*/ 
let productController= require('../controllers/productController');

//Require middleware validaciones
let createValidations = require('../middleware/createProductValidation')
let isAdmin = require('../middleware/idAdmin')
//Require de Multer
let upload = require('../middleware/multerMiddleware');



router.get('/', productController.index);

//Editar producto
router.get('/products/:id/edit',isAdmin, productController.edit);
router.put('/products/:id',upload.single('image'),createValidations,productController.update)


router.get('/carrito', productController.cart);


/**Crear Producto **/
router.get('/products/create',isAdmin, productController.add);
router.post('/products', upload.single('image'),createValidations, productController.store)


/*Detalle de producto**/ 
router.get('/products/:id', productController.detail);


//Ruta para todos los productos (GET)
router.get('/products', productController.all);

/*** DELETE ONE PRODUCT***/ 
router.delete('/products/delete/:id', productController.destroy); 


//SEARCH
router.post('/products/search',productController.search);

router.get('/categorias', productController.allCategories);

//CATEGORIES

router.get('/Auriculares', productController.all);
router.get('/Computadoras', productController.all);
router.get('/Sillas', productController.all);
router.get('/Teclados', productController.all);
router.get("/Audio-Video",productController.all);
router.get("/Pc-Notebook",productController.all);


module.exports= router;