const express = require('express');
const models = require('../models');
const {jwtSecret} = require('../config');
const jwt = require('jsonwebtoken');
const md5 = require('md5');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try{
    const Users = await models.Users.findAll();
    res.json({
      status: 'ok',
      Users,
    })
  }catch (e) {
    next(e)
  }
})





module.exports = router;