const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');

// GET /api/menu
router.get('/', async (req, res) => {
  try {
    const items = await MenuItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ✅ POST single menu item
router.post('/', async (req, res) => {
  try {
    const { name, description, price, image } = req.body;

    if (!name || !description || !price || !image) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newItem = await MenuItem.create({ name, description, price, image });
    res.status(201).json(newItem);
  } catch (err) {
    console.error('Menu POST error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});


module.exports = router;
