import invite from '../http/controllers/user'

const routes = []

const addRoute = (path, method, callback) => {
  routes.push({
    type: 'Route',
    path,
    method,
    callback
  })
}

addRoute('/user', 'get', invite.getList)
addRoute('/user/:userId', 'get', invite.get)
addRoute('/user', 'post', invite.post)

export default routes
