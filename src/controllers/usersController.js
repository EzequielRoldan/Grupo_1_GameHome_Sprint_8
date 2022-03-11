const { validationResult}= require('express-validator')
const bcryptjs = require('bcryptjs');
const db = require('../database/models');
const Users = db.User;
const { Op } = require("sequelize");


const usersController = {

    login:(req,res)=>{
        if(req.session.user){
            res.render('users/login',{
                user:req.session.user
            });
        }else{
            res.render('users/login')
        };
        
    },

    register: (req,res)=>{

        if(req.session.user){
            res.render('users/register',{
                user:req.session.user
            });
        }else{
            res.render('users/register')
        };   
    },

    create: (req,res)=>{

        const resulValidation = validationResult(req)
        if(resulValidation.isEmpty()){
            let user = req.body
            let password = bcryptjs.hashSync(req.body.password,10)
             
             user.password=password
             console.log(req.file);
        //Para aplicar imagen de usuario por Default
        if(req.file){
            
            user.avatar = req.file.filename
        }else{
            user.avatar = 'default-image.png'
        }
      
        //Determinar el rol
        if(req.body.email.includes('@gamehome.com')){
            user.rolId= 1
        }else{
            user.rolId =2
        }
        //Valida que el email no esté en la base
        let userDB =  Users.findOne({
            where: {
                email: req.body.email
            }}).then((result)=>{
            return result
        });
        let body = req.body
        body.password = ''
       if (userDB) {
             res.render('users/register',{
                errors: {
                    email: {
                        msg: 'Este email ya está registrado'
                    }
                },
                old: body,
            });
        }else{
        //Creación a través de la variable user con el create db
        Users.create(user).then(()=>{
            return res.redirect('/usuario/login')
        }).catch(error => res.send(error))}
           

        }else{
            res.render('users/register',{
                errors:resulValidation.mapped(),
                old:req.body
            });
        }     
    },

    loginProcess:async (req,res)=>{
         
        const errors = validationResult(req)
        if(errors.isEmpty()){

            let user = await Users.findOne({
                where:{
                email:req.body.email
            }})




            if(user && bcryptjs.compareSync(req.body.password,user.password)==true){

                  req.session.user=user

                console.log(req.session.user.email)

                //Para salvar la cookie
                    if(req.body.recordar){
                        res.cookie('userEmail',req.body.email,{maxAge:(1000*60)*2})}
                    
                    return res.redirect('/')
                
            }
            else{
                res.render('users/login',{
                    errors: {
                        email: {
                            msg: 'Debes registrarte primero'
                        }
                    },
                });
            }
        } else{
           res.render('users/login',{errors:errors.mapped(),old:req.body});
        }
    
    
 
    },
    profile:function (req,res) {

        res.render('users/userProfile',{user:req.session.user})
    },

    editProfile:(req,res) =>{

        res.render('users/editProfile',{user:req.session.user})
    },

    editProfileProcess: async (req,res)=>{

        let userOld = await Users.findOne({where:{id:req.params.id}})

        let userBody=req.body

        if(req.file){
            userBody.avatar=req.file.filename
        }else{
            userBody.avatar=userOld.avatar
        }
        


        let user = await Users.update({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            avatar:userBody.avatar
        },
        {
            where:{
                id:req.params.id
            }
        })

        let userActualizado = await Users.findOne({where:{id:req.params.id}})
       

        if(userActualizado){
            req.session.user=userActualizado
        }

        res.render('users/userProfile',{user:req.session.user})
    
    },
    //Borra lo que esté en session
	logout:(req,res) =>{
		req.session.destroy();
        res.clearCookie('userEmail')
		return res.redirect('/');
	}
	
}

module.exports=usersController;