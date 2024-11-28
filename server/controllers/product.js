const Product = require('../models/product');

exports.getAllProducts = async (req, res, next) => {
    try {
        const data = await Product.find();
        if (data && data.length !== 0) {
            return res.status(200).send({
                message: "Products found!",
                payload: data
            });
        }
        res.status(500).send({
            message: "Products not found!"
        })
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.getProductById = async (req, res, next) => {
    try {
        const data = await Product.findById(req.params.id);
        if (data) {
            return res.status(200).send({
                message: "Product found!",
                payload: data
            });
        }
        res.status(500).send({
            message: "Product not found!"
        })
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.createProduct = async (req, res, next) => {
    try {
        const data = new Product({
            name: req.body.name,
            price: req.body.price, 
            description: req.body.description
        })
        const result = await data.save();
        if(result){
            return res.status(201).send({
                message: "Product created!",
                payload: result,
            })
        }
        res.status(500).send({
            message: "Wrong input!",
        })
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.updateProduct = async (req, res, next) => {
    try {
        const data = {
            name: req.body.name,
            price: req.body.price, 
            description: req.body.description
        };
        const result = await Product.findByIdAndUpdate(req.params.id, data);
        if(result){
            return res.status(200).send({
                message: "Product updated!",
                payload: result,
            })
        }
        res.status(500).send({ 
            message: "Wrong input!",
        })
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.deleteProduct = async (req, res, next) => {
    try {
        const data = {
            name: req.body.name,
            price: req.body.price, 
            description: req.body.description
        };
        const result = await Product.findByIdAndDelete(req.params.id, data);
        if(result){
            return res.status(200).send({
                message: "Product deleted!",
                payload: result,
            })
        }
        res.status(500).send({
            message: "Wrong input!",
        })
    } catch (err) {
        res.status(500).send(err);
    }
};
