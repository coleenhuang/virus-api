require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const FamiliesService = require('./families-service')
const VirusService = require('./virus-service')

const app = express()

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption))
app.use(helmet())
app.use(cors())

 app.get('/', (req, res) => {
   res.send('Hello, world!')
 })


 app.get('/baltimore', (req, res, next) => {
   const { type } = req.query;
   const validTypes = [
     'I','II','III','IV','V','VI','VII'
   ]
  // do some validation
  if (!type) {
    // type is required
    return res
      .status(400)
      .send('Please provide a type that is a roman numeral from I to VII');
  }
  else if (!validTypes.includes(type.toUpperCase())){
    return res
      .status(400)
      .send('Please provide a type that is a roman numeral from I to VII');
  }
   const knexInstance = req.app.get('db')
   FamiliesService.getAllFamilies(knexInstance, type)
      .then(articles => {
        res.json(articles)
      })
      .catch(next)
 })
 app.get('/families', (req, res, next) => {
   const { family } = req.query;
   const knexInstance = req.app.get('db')
   // do some validation
   if (!family) {
     VirusService.getAllViruses(knexInstance)
      .then(viruses => {
        res.json(viruses)
      })
      .catch(next)
   }

   /*VirusService.getVirusFam(knexInstance, family)
     .then(articles => {
       res.json(articles)
     })
     .catch(next)*/
 })


 app.use(function errorHandler(error, req, res, next) {
    let response
    if (NODE_ENV === 'production') {
    response = { error: { message: 'server error' } }
    } else {
       console.error(error)
       response = { message: error.message, error }
     }
     res.status(500).json(response)
   })


module.exports = app
