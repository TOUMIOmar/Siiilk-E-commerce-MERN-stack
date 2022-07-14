const Product = require('../models/productModel');
const bcrypt = require ('bcrypt')
const jwt = require('jsonwebtoken');

// @desc add a new product
// @params POST /api/product/
// @access PRIVATE
exports.addProduct = async(req,res)=>{
    try {
        const newProduct = await Product.create({...req.body})
        res.status(201).json(newProduct)
    } catch (error) {
        res.status(500).json({msg: 'something went wrong!'});
    }
}

// @desc get a list of all products
// @params GET /api/product/
// @access PUBLIC
exports.getProducts = async(req,res)=>{
    try {
        const products = await Product.find();
        res.status(201).json(products);
    } catch (error) {
        res.status(500).json({msg: 'something went wrong!'});
    }
}

// @desc update product by id
// @params GET /api/product/:prodId
// @access PRIVATE admin
exports.updateProduct = async(req,res)=>{
    try {
       await Product.findByIdAndUpdate(req.params.prodId,  {...req.body},
            {new: true});
        res.status(200).json({msg : 'product updated !'});
    } catch (error) {
        res.status(500).json({msg: 'something went wrong!'});
    }
}

// @desc delete product by id
// @params DELETE /api/product/:prodId
// @access PRIVATE admin
exports.deleteProduct = async(req,res)=>{
    try {
       await Product.findByIdAndDelete(req.params.prodId);
        res.status(200).json({msg : 'product deleted !'});
    } catch (error) {
        res.status(500).json({msg: 'something went wrong!'});
    }
}

// @desc get a list of all products
// @params GET /api/product/:proId
// @access PUBLIC
// exports.getProductsToCart = async(req,res)=>{
//     try {
//        await Product.findById(req.params.prodId,  {...req.body});
//         res.status(200).json({msg : 'product updated !'});
//     } catch (error) {
//         res.status(500).json({msg: 'something went wrong!'});
//     }
// }