const models = require('../models');
const express = require('express');

const router = express.Router();


router.get('/', async (req, res, next) => {
    try {
        const regions = await models.Regions.findAll();
        res.json({
            status: 'ok',
            regions,
        })
    } catch (e) {
        next(e)

    }
});


router.put('/', async (req, res, next) => {
    try {
        const {
            region_name,
        } = req.body;
        const region = await models.Regions.create({
            region_name,
        });
        res.json({
            status: 'ok',
            region,
        })
    } catch (e) {
        next(e)
    }
});


module.exports = router;
