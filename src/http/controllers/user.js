const get = (req, res) => {
  res.send({"id": 1, "username": "john.snow", "createdAt": "121513251515", "updatedAt": "31561681525"})
}

const post = (req, res) => {
  res.send({"id": 1, "username": req.body.username, "password": req.body.password, "createdAt": "121513251515", "updatedAt": "31561681525"})
}

export default {
  get,
  post,
}
