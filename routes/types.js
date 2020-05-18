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





module.exports = router;