import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import bluebird from 'bluebird'
import mapRoutes from './router'

const MONGO_HOST = process.env.MONGO_HOST || 'mongo'
const MONGO_PORT = process.env.MONGO_PORT || 27017

const server = express()

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use((req, res, next) => {
  res.header('Content-Type', 'application/json')
  res.header('Access-Control-Allol-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
  res.header('Access-Control-Allow-Headers', 'Accept,Content-Type,Authorization,Pragma')
  next()
})

const listen = (port, callback = () => {}) => {
  const uri = `mongodb://${MONGO_HOST}:${MONGO_PORT}/chess`
  const options = { promiseLibrary: bluebird }

  mongoose.connect(uri, options)
    .then(() => {
      mapRoutes(server)
      server.listen(port, callback)
    })
}

export default {
  listen,
}
