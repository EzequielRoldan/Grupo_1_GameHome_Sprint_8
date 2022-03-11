const path = require('path');
const { body } = require('express-validator');

module.exports = [
    //Validación E-mail
    body('email').notEmpty().withMessage('El E-mail tiene que ser completado.')
        .bail().isEmail().withMessage('El E-mail tiene que ser válido.'),
    
    //Validacion  Contraseña
    
    body('password').notEmpty().withMessage('La contraseña debe ser completada.')
    
]