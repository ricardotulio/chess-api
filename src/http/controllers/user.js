import User from '../../database/models/user'

const getList = (req, res) => {
  User.find()
    .then((users) => {
      res.send(users)
    })
}

const get = (req, res) => {
  User.findById(req.params.userId)
    .then((user) => {
      res.send(user)
    })
}

const post = (req, res) => {
  const user = new User()
  user.name = req.body.name
  user.email = req.body.email
  user.username = req.body.username
  user.password = req.body.password

  user.save()
    .then(() => {
      res.send(user)
    })
}

export default {
  getList,
  get,
  post,
}
