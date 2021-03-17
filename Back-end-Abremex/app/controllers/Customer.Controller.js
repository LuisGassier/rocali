const Customer = require('../models/Customer.Model');

const getCustomers = async(req, res) => {
    try {
        const customers = await Customer.find();
        return res.json(customers);
    } catch (error) {
        return res.status(500).send({ 
            message: error.message 
        });
    }
};

const getCustomer = async(req, res) => {
    const { customerId } = req.params;
    try {
        const customer = await Customer.findById(customerId);
        return res.json(customer);
    } catch (error) {
        return res.status(500).send({ 
            message: error.message 
        });
    }
};

const addCustomer = async(req, res) => {
    try {
        const customer = new Customer(req.body);
        await customer.save();
        return res.json(customer);
    } catch (error) {
        return res.status(500).send({ 
            message: error.message 
        });
    }
};

const editCustomer = async(req, res) => {
    const { customerId } = req.params;
    try {
        await Customer.findByIdAndUpdate(customerId, req.body);
        res.json({
            status: true
        });
    } catch (error) {
        return res.status(500).send({ 
            message: error.message 
        });
    }
};

const removeCustomer = async(req, res) => {
    const { customerId } = req.params;
    try {
        await Customer.findByIdAndRemove(customerId);
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
    getCustomers,
    getCustomer,
    addCustomer,
    editCustomer,
    removeCustomer
};