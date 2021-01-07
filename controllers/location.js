const Location = require('../models/Location')
const errorHandler = require('../utils/errorHandler')

module.exports.getAll = async function (req, res) {
  try {
    const locations = await Location.find({user: req.user.id})
    res.status(200).json(locations)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.remove = async function (req, res) {
  try {
    await Location.remove({_id: req.params.id})
    res.status(200).json({
      message: 'Маркер удален'
    })
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.create = async function (req, res) {
  try {
    const location = await new Location({
      name: req.body.name,
      coords: req.body.coords,
      user: req.user.id
    }).save()
    res.status(201).json({
      location,
      message: "Маркер добавлен"
    })
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.update = async function (req, res) {
  try {
    const location = await Location.findOneAndUpdate(
      {_id: req.params.id},
      {$set: req.body},
      {new: true}
      )
    res.status(200).json({
      location,
      message: "Маркер изменен"
    })
  } catch (e) {
    errorHandler(res, e)
  }
}