import express from 'express'
import { mapRoutes } from './http/router'
import { routes } from './config/routes'

const app = express()
mapRoutes(app, routes)

app.listen(80)
