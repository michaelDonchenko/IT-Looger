const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema;

const LogSchema = mongoose.Schema({
  tech: {
    type: ObjectId,
    ref: 'techs',
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  attention: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  }, 
})

module.exports = mongoose.model('logs', LogSchema)