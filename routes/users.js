const express = require('express');
const models = require('../models');
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

router.put('/', async (req, res, next) => {
  try {
    const {
      username,
      password,
      email,
      role,
    } = req.body;
    const user = await models.Users.create({
      username,
      password,
      email,
      role,
    });
    res.json({
      status: 'ok',
      user,
    })
  } catch (e) {
    next(e)
  }
});


router.post('/', async (req, res, next) => {
  try {
    const {
      id,
      username,
      password,
      email,
      role,
    } = req.body;
    await models.Users.update({
      username,
      password,
      email,
      role,
    }, {where: {id}});
    res.json({
      status: 'ok',
      users: {
        id,
        username,
        password,
        email,
        role,
      },
    })
  } catch (e) {
    next(e)
  }
});






module.exports = router;