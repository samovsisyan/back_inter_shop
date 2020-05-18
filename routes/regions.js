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

router.post('/', async (req, res, next) => {
    try {
        const {
            id,
            region_name,
        } = req.body;
        await models.Regions.update({
            region_name,
        }, {where: {id}});
        res.json({
            status: 'ok',
            regions: {
                id,
                region_name,
            },
        })
    } catch (e) {
        next(e)
    }
});

router.delete('/', async (req, res, next) => {
    try {
        const paramId = req.param('id');
        await models.Regions.destroy({
            where: {
                "id": paramId
            }
        });
        res.json({
            status: 'ok',
        })
    } catch (e) {
        next(e)
    }
});

module.exports = router;
