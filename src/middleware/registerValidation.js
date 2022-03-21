const path = require('path');
const { body } = require('express-validator');

module.exports = [

//Validación del Nombre
body('firstName').notEmpty().withMessage('El nombre tiene que ser completado.')
	.bail().isLength( { min: 2 }).withMessage('El nombre debe al menos 2 caracteres.'),


//Validación del apellido
body('lastName').notEmpty().withMessage('El apellido tiene que ser completado.')
	.bail().isLength( { min: 2 }).withMessage('El apellido debe al menos 2 caracteres.'),


//Validación E-mail
    body('email').notEmpty().withMessage('El E-mail tiene que ser completado.')
        .bail().isEmail().withMessage('El E-mail tiene que ser válido.'),

//Validación para Password
    body('password').notEmpty().withMessage('Escribe una contraseña, por favor.')
        .bail().matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{4,}$/).withMessage('La contraseña debe tener, al menos, una mayúscula, una minúscula, un número y un caracter especial').isLength( { min: 8, max: 15 }).withMessage('La constraseña debe tener entre 8 y 15 caracteres.'),
		
//Relase date
	body('date').notEmpty().withMessage('Elegí tu fecha de nacimiento.'),
//Validación para Imagen de perfil
    body('avatar').custom((value, { req }) => {
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

];