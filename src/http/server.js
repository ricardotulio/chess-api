import express from 'express'
import mapRoutes from './router'
import bodyParser from 'body-parser'

const server = express()

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: true}))
server.use((req, res, next) => {
  res.header('Content-Type', 'application/json')
  res.header('Access-Control-Allol-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
  res.header('Access-Control-Allow-Headers', 'Accept,Content-Type,Authorization,Pragma')
  next()
})

mapRoutes(server)

export default server
