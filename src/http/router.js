import R from 'ramda'

export const mapRoutes = R.curry((app, routes) => {
  routes.map((route) => {
    app[route.method](route.path, route.callback)
  })
})
