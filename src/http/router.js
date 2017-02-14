import routes from '../config/routes'

const mapRoutes = (app) => {
  routes.map(route => app[route.method](route.path, route.callback))
}

export default mapRoutes
