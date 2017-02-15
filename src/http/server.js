import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import bluebird from 'bluebird'
import mapRoutes from './router'

const MONGODB_HOST = process.env.MONGODB_HOST || 'mongo'
const MONGODB_PORT = process.env.MONGODB_PORT || 27017
const MONGODB_USER = process.env.MONGODB_USER || 'chess'
const MONGODB_PASS = process.env.MONGODB_PASS || 'chess'

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
  const uri = `mongodb://${MONGODB_USER}:${MONGODB_PASS}@${MONGODB_HOST}:${MONGODB_PORT}/chess`
  const options = { promiseLibrary: bluebird }

  mongoose.connect(uri, options)

  mongoose.connection.on('open', () => {
    mapRoutes(server)
    server.listen(port, callback)
  })
}

export default {
  listen,
}
