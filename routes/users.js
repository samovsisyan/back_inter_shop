const express = require('express');
const models = require('../models');
const router = express.Router();
const jwt = require('jsonwebtoken');
const {jwtSecret} = require('../config');
const md5 = require('md5');




router.post('/login', async (req, res, next) => {
  try {
    const {username, password} = req.body;
    if (username && password) {
      const user = await models.Users.findOne({
        where: {
          username: username,
          password: password
        }
      });

      if (user) {
        console.log("user.user.user.user.user")

        const token = jwt.sign({userId: user.id, userRole: user.role}, jwtSecret);
        return res.send({
          status: 'ok',
          token: token,
          user,
        })
      }

    }

    res.status(401).send({
      status: 'error',
      message: 'Invalid username or password'
    })
  } catch (e) {
    next(e)
  }
});


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

router.delete('/', async (req, res, next) => {
  try {
    const paramId = req.param('id');
    await models.Users.destroy({
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