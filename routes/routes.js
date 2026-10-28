const express = require('express');
const router = express.Router();
const CrudUser = require('../models/user'); 


router.post('/creat', async (req, res) => {
    try {
        const { name, email, phone, age } = req.body; 
        
        const newItem = await CrudUser.create({ name, email, phone, age });
        
        res.status(201).json({
            message: "Item created successfully!",
            data: newItem
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.get('/getdata', async (req, res) => {
    try {
        const items = await CrudUser.find({}); 
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.put('/update-data/:id', async (req, res) => {
    try {
        const itemId = req.params.id;
        const { name, email, phone, age } = req.body;

        const updatedItem = await CrudUser.findByIdAndUpdate(
            itemId, 
            { name, email, phone, age }, 
            { new: true } 
        );

        if (!updatedItem) {
            return res.status(404).json({ message: "Item not found" });
        }

        res.status(200).json({
            message: "Item updated successfully!",
            data: updatedItem
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.delete('/delete-data/:id', async (req, res) => {
    try {
        const itemId = req.params.id;

        const deletedItem = await CrudUser.findByIdAndDelete(itemId);

        if (!deletedItem) {
            return res.status(404).json({ message: "Item not found" });
        }

        res.status(200).json({
            message: "Item deleted successfully!"
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;