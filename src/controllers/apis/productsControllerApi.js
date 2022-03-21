const db = require('../../database/models')
const { Op } = require("sequelize");
const { promiseImpl } = require('ejs');
const { validationResult}= require('express-validator')
/*Modelos base de datos*/

const Products = db.Product
const Colors = db.Color
const Brands = db.Brand
const Categories = db.Category



const productsControllerApi = {
    'list' :(req,res)=>{
       

            let pcComponentes = Products.count({
                where:{categoryId:1}
            })

            let notebook = Products.count({
                where:{categoryId:2}
            })

            let audio = Products.count({
                where:{categoryId:3}
            })

            let video = Products.count({
                where:{categoryId:4}
            })

            let perifericos = Products.count({
                where:{categoryId:5}
            })

            let otros = Products.count({
                where:{categoryId:6}
            })
            

            Promise.all([pcComponentes,notebook,audio,video,perifericos,otros])
            .then(categories =>{


                Products.findAll({include:['brand','color','category']})
                .then(products =>{

                    let productsWidthDetail=[];


                    products.forEach(product => {
                        let newProduct = {
                            Name:product.name,
                            Id:product.id,
                            Description:product.extended_description,
                            Price:product.price,
                            Image:`/images/${product.image}`,
                            detail: `/api/products/${product.id}`
                        }
                        productsWidthDetail.push(newProduct);
                    });

                    let respuesta = {
                        meta:{
                            status:200,
                            url:'api/products',
                           
                        },
                        count:products.length,
                        countByCategory:[
                            {PcComponentes:categories[0]},
                            {Notebook:categories[1]},
                            {Audio:categories[2]},
                            {Video:categories[3]},
                            {Perifericos:categories[4]},
                            {Otros:categories[5]}
                        ],
                        products:productsWidthDetail,
                        
                    }
        
                    res.json(respuesta)
                })
            })


            
    }
}

module.exports = productsControllerApi;