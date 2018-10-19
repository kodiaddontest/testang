var express = require("express");
var route = express.Router();
var jwtCheck = require("../jwtcheck");
var Product = require("../models/product.model");
route.post('/products',jwtCheck,(req,res,next)=>{
var product = new Product();
product.owner = req.decoded.user._id;
product.category = req.body.category,
product.title = req.body.title;
product.price = req.body.price;
product.description = req.body.description;
product.image = req.body.image;
product.save();
res.json({
    success : true,
    message : "Product added successfully"
})
})

route.get("/categories/:id",jwtCheck,(req,res,next)=>{
    console.log('The category id is ',req.params.id)
    Product.find({
        category : req.params.id
    })
    .populate("owner")
    .populate("category")
    .exec((err,products)=>{
if(err){
    res.json({
        success : false,
        message : err
    })
}
res.json({
    success : true,
    message : "categories",
    products : products,
    categoryName : products[0].category.name

})
    });
})


module.exports = route;