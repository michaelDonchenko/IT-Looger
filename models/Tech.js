const mongoose = require('mongoose')

const TechSchema = mongoose.Schema({
  
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('techs', TechSchema)