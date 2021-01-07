const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const keys = require('../config/keys')
const errorHandler = require('../utils/errorHandler')

module.exports.login = async function (req, res) {
  const candidate = await User.findOne({email: req.body.email})
  if (candidate) {
    const passwordResult = bcrypt.compareSync(req.body.password.toString(), candidate.password.toString())
    if (passwordResult) {
      const token = jwt.sign({
        email: candidate.email,
        userId: candidate._id
      }, keys.jwt, {expiresIn: 10})

      res.status(200).json({
        token: `Bearer ${token}`,
      })
    } else {
      res.status(401).json({
        message: 'Пароли не совпадают. Попробуйте снова.'
      })
    }
  } else {
    res.status(404).json({
      message: `Пользователь с почтой ${req.body.email} не найден`
    })
  }
}

module.exports.register = async function (req, res) {
  const candidate = await User.findOne({email: req.body.email})

  if (candidate) {
    res.status(409).json({
      message: `Пользователь с почтой ${req.body.email} уже зарегистрирован!`
    })
  } else {
    const salt = bcrypt.genSaltSync(10)
    const password = req.body.password.toString()
    const user = new User({
      email: req.body.email.toString(),
      password: bcrypt.hashSync(password, salt)
    })
    try {
      await user.save()
      res.status(201).json(user)
    } catch (e) {
      errorHandler(res, e)
    }
  }
}