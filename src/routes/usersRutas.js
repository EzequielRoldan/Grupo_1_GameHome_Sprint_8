const express= require('express');
const router= express.Router();
const path = require('path');

//Multer y register validation
const upload= require('../middleware/multerAvatar');
const validationRegister = require('../middleware/registerValidation');
const loginValidation=require('../middleware/loginValidation')


/*Con esta variable llamo a mi archivo localizado en la carpeta CONTROLLER*/ 
let usersController= require('../controllers/usersController');


//Require middlewares de autentificacion
let ifUserLogged = require('../middleware/ifuserLogged')
let auth = require('../middleware/auth')


//Login
router.get('/login',ifUserLogged, usersController.login);

//Procesamiento de formulario de loggeo
router.post('/login',loginValidation,usersController.loginProcess);
//Logout
router.get('/logout', usersController.logout);
//Register
router.get('/registro',ifUserLogged, usersController.register);

router.post('/registro',upload.single('avatar'),validationRegister,usersController.create);

//Perfil de usuario
router.get('/perfil',auth,usersController.profile);
//Edit profile
router.get('/editProfile',auth,usersController.editProfile)

//Edición de perfil
router.put('/editar/:id',validationRegister,upload.single('avatar'),usersController.editProfileProcess,);


module.exports= router;