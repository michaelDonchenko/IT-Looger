const express = require('express')
const router = express.Router()
const Tech = require('../models/Tech')

router.get('/techs', async (req,res) => {
  try {
    const techs = await Tech.find()
    if (techs.length === 0) {
      return res.status(404).send(null)
    } 
    res.json(techs)
    
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server error')
  }
})

router.post('/techs', async (req,res) => {
  const {name, lastName} = req.body
  try {
    const tech = await new Tech({
      name,
      lastName
    })

    await tech.save()
    res.json(tech)
    
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server error')
  }
})

router.delete('/techs/:id', async (req,res) => {
  try {
    await Tech.findByIdAndRemove(req.params.id)
    return res.json({msg: 'Tech Deleted'})
    
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server error')
  }
})


module.exports = router