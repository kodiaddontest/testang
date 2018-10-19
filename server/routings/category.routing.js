var express = require('express');
var route = express.Router();
var Category = require('../models/category.model');
var jwtCheck=require('../jwtcheck');

route.post('/categories',(req,res,next)=>{
var category = new Category();
category.name = req.body.name;
category.save();
res.json({
    success : true,
    message : "category created succesfully"
})
})


route.delete('/categories/:id',jwtCheck,(req,res)=>{
    Category.remove({_id:req.params.id},(err,categories)=>{
        if(err){
            res.json({
                message : err
            })
        }
        else{
            res.json({
                success : true,
                message : "category deleted successfully"
            })
        }
})
})


route.get('/categories',jwtCheck,(req,res,next)=>{
Category.find({},(err,categories)=>{
if(err){
    res.json({
        success : false,
        message : err
    })
}
else{
    res.json({
        success : true,
        categories : categories
    })
}
})
})


module.exports = route;