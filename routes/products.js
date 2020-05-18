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


router.put('/', async (req, res, next) => {
    try {
        const {
            name,
            weight,
            size,
        } = req.body;
        const product = await models.Products.create({
            name,
            weight,
            size,
        });
        res.json({
            status: 'ok',
            product,
        })
    } catch (e) {
        next(e)
    }
});


router.post('/', async (req, res, next) => {
    try {
        const {
            id,
            name,
            weight,
            size,
        } = req.body;
        await models.Products.update({
            name,
            weight,
            size,
        }, {where: {id}});
        res.json({
            status: 'ok',
            products: {
                id,
                name,
                weight,
                size,
            },
        })
    } catch (e) {
        next(e)
    }
});






module.exports = router;