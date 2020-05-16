const express = require('express');
const models = require('../models');
const router = express.Router();
const LIMIT = 20;

router.get('/', async (req, res, next) => {
    try {
        const page = req.query.page || 1;
        const peoples =
            await models.Peoples.findAll(
                {
                    offset: LIMIT * page - LIMIT,
                    limit: LIMIT,
                    include:
                        [{model: models.Regions}],
                }
            );
        const total = await models.Peoples.count();
        res.json({
            status: 'ok',
            peoples,
            page,
            total,
            totalPage: Math.ceil(total / LIMIT),
        })
    } catch (e) {
        next(e)
    }
});



router.put('/', async (req, res, next) => {
    try {
        const {
            name,
            l_name,
            m_name,
            phone,
            passport,
            region_id,
            address,
        } = req.body;
        const people = await models.Peoples.create({
            name,
            l_name,
            m_name,
            phone,
            passport,
            region_id,
            address,
        });
        res.json({
            status: 'ok',
            people,
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
            l_name,
            m_name,
            phone,
            passport,
            region_id,
            address,
        } = req.body;
        const people = await models.Peoples.update({
            name,
            l_name,
            m_name,
            phone,
            passport,
            region_id,
            address,
        }, {where: {id}});
        res.json({
            status: 'ok',
            peoples: {
                id,
                name,
                l_name,
                m_name,
                phone,
                passport,
                region_id,
                address,
            },
        })
    } catch (e) {
        next(e)
    }
});

router.delete('/', async (req, res, next) => {
    try {
        const paramId = req.param('id');
        await models.Peoples.destroy({
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