const express = require('express');
const models = require('../models');
const router = express.Router();



router.get('/', async (req, res, next) => {
    try{
        const Products = await models.Products.findAll();
        res.json({
            status: 'ok',
            Products,
        })
    }catch (e) {
        next(e)
    }
})






module.exports = router;