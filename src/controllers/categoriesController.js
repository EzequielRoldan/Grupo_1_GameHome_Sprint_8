const path = require('path');
let db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const Product = db.Product;
const Brand = db.Brand;
const Category = db.Category;



const categoryController = {

    list: (req, res) => {
        Category.findAll()
        .then(categories => {
            console.log(categories)
            res.render('products/categories.ejs', {categories})
        });
    }};

module.exports = categoryController;