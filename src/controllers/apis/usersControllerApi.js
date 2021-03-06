const { Op } = require("sequelize");
const db = require('../../database/models');
const path = require('path');

const User = db.User;

const userControllerApi = {
    all: (req,res) => {
        User.findAll()
            .then(usersDB => {
                let users = [];
                usersDB.forEach(user => {
                    let userForApi = {
                        id: user.id,
                        name: user.firstName,
                        lastName:user.lastName,
                        email: user.email,
                        detail: `/api/users/${user.id}`,
                        avatar: `/images/users/${user.avatar}`
                    };
                    users.push(userForApi);
                });
                let respuesta = {
                meta: {
                    status: 200,
                    url: 'api/users'
                },
                total: users.length,
                usuarios: users
            }
                res.json(respuesta);
            }).catch(error => 
                res.send(error)
        )},

    usersData: (req,res) => {
        User.findByPk(req.params.id)
        .then(user => {
            
              let usuario = {
                id: user.id,
                name: user.firstName,
                lastName: user.lastName,
                email: user.email,
                avatar: `/images/users/${user.avatar}`

              }           
                
                res.json(usuario);
            }).catch(error =>
                res.send(error));

    }
};

module.exports = userControllerApi;