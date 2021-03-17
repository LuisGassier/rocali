const Category = require('../models/shared/Category.Model');

const getCategories = async(req, res) => {
    try {
        const categories = await Categories.find();
        return res.json(categories);
    } catch (error) {
        return res.status(500).send({ 
            message: error.message 
        });
    }
};

const getCategory = async(req, res) => {
    const { categoryId } = req.params;
    try {
        const category = await Category.findById(categoryId);
        return res.json(category);
    } catch (error) {
        return res.status(500).send({ 
            message: error.message 
        });
    }
};

const addCategory = async(req, res) => {
    try {
        const category = new Category(req.body);
        await category.save();
        return res.json(category);
    } catch (error) {
        return res.status(500).send({ 
            message: error.message 
        });
    }
};

const editCategory = async(req, res) => {
    const { categoryId } = req.params;
    try {
        await Product.findByIdAndUpdate(categoryId, req.body);
        res.json({
            status: true
        });
    } catch (error) {
        return res.status(500).send({ 
            message: error.message 
        });
    }
};

const removeCategory = async(req, res) => {
    const { categoryId } = req.params;
    try {
        await Category.findByIdAndRemove(categoryId);
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
    getCategories,
    getCategory,
    addCategory,
    editCategory,
    removeCategory
};