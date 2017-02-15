import User from '../../database/models/user'

const get = (req, res) => {
  User.findById(req.params.userId)
    .then((user) => {
      res.send(user)
    })
}

const post = (req, res) => {
  const user = new User()
  user.username = req.body.username
  user.password = req.body.password

  user.save()
    .then(() => {
      res.send(user)
    })
}

export default {
  get,
  post,
}
