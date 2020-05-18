const express = require('express');
const models = require('../models');
const router = express.Router();



router.get('/', async (req, res, next) => {
    try{
        const Types = await models.Types.findAll();
        res.json({
            status: 'ok',
            Types,
        })
    }catch (e) {
        next(e)
    }
})

router.put('/', async (req, res, next) => {
    try {
        const {
            name,
            short_name,
            price,
        } = req.body;
        const type = await models.Types.create({
            name,
            short_name,
            price,
        });
        res.json({
            status: 'ok',
            type,
        })
    } catch (e) {
        next(e)
    }
});



module.exports = router;