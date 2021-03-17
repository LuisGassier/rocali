const Product = require('../models/Product.Model');

const getProducts = async(req, res) => {
    try {
        const products = await Products.find();
        return res.json(products);
    } catch (error) {
        return res.status(500).send({ 
            message: error.message 
        });
    }
};

const getProduct = async(req, res) => {
    const { productId } = req.params;
    try {
        const product = await Product.findById(productId);
        return res.json(product);
    } catch (error) {
        return res.status(500).send({ 
            message: error.message 
        });
    }
};

const addProduct = async(req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        return res.json(product);
    } catch (error) {
        return res.status(500).send({ 
            message: error.message 
        });
    }
};

const editProduct = async(req, res) => {
    const { productId } = req.params;
    try {
        await Product.findByIdAndUpdate(productId, req.body);
        res.json({
            status: true
        });
    } catch (error) {
        return res.status(500).send({ 
            message: error.message 
        });
    }
};

const removeProduct = async(req, res) => {
    const { productId } = req.params;
    try {
        await Product.findByIdAndRemove(productId);
        res.json({
            status: true
        });
    } catch (error) {
        return res.status(500).send({ 
            message: error.message 
        });
    }
};

module.exports = {
    getProducts,
    getProduct,
    addProduct,
    editProduct,
    removeProduct
};