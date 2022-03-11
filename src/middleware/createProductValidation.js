const path = require('path');
const { body } = require('express-validator');

module.exports = [
    //Validación Name
    body('name').notEmpty().withMessage('Debes escribir un nombre')
        .bail().isLength( { min: 5}).withMessage('El nombre debe tener minimo 5 caracteres'),
    body('stock').notEmpty().withMessage('Debes especificar el stock'),
    body('stock_min').notEmpty().withMessage('Debes especificar el stock minimo'),
    body('stock_max').notEmpty().withMessage('Debes especificar el stock maximo'),
   
   
    //Validacion Description
   
    body('description').notEmpty().withMessage('Debes escribir una  descripción')
        .bail().isLength( { min: 20}).withMessage('La descripción debe tener al menos 20 caracteres'),
     body('extended_description').notEmpty().withMessage('Debes escribir una descripción')
        .bail().isLength( { min: 20}).withMessage('La descripción debe tener al menos 20 caracteres'),  
    
    //Validacion Imagenes 
    
    body('image').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.JPG', 'JPEG', '.PNG', '.GIF'];

		if (file) {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			};
		}

		return true;
	})
    

        
]