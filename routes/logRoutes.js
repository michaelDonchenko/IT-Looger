const express = require('express')
const router = express.Router()
const Log = require('../models/Log')

router.get('/logs', async (req,res) => {
  try {
    const logs = await Log.find().populate('tech').sort('-date')
    // if (!logs || logs.error) {
    //   return res.json({error: 'No logs found'})
    // }
    res.json(logs)

  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server error')
  }
})

router.post('/logs', async (req,res) => {
  const {message, attention, tech} = req.body
  try {
    const log = await new Log({
      message, attention, tech
    })
    .populate('tech')

    await log.save()
    res.json(log)
    
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server error')
  }
})

router.delete('/logs/:id', async (req,res) => {
  try {
    await Log.findByIdAndRemove(req.params.id)
    return res.json({msg: 'Log Deleted'})
    
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server error')
  }
})

router.put('/logs/update/:id', async (req,res) => {
  const {message, attention, tech, date} = req.body
  //build log object
  const logFields = {}
  if(message) logFields.message = message
  logFields.attention = attention
  logFields.date = date
  if(tech) logFields.tech = tech


  let log = await Log.findById(req.params.id)
  if (!log) return res.status(404).json({error: 'Contact not found'})

  log = await Log.findByIdAndUpdate(req.params.id,
    {$set: logFields},
    {new: true}, (err, result) => {
      if (err) {
        res.send(err)
      } 
      res.send(result)
    }
 )
})

module.exports = router