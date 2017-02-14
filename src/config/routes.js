import invite from '../http/controllers/user'

const routes = [
  {
    path: '/user/:userId',
    method: 'get',
    callback: invite.get,
  },
  {
    path: '/user',
    method: 'post',
    callback: invite.post,
  },
]

export default routes
