const get = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({"id": 1, "username": "john.snow", "password": "123456", "createdAt": "14/06/1991", "updatedAt": "14/06/1991"}))
}

const post = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({"id": 1, "username": "john.snow", "password": "123456", "createdAt": "14/06/1991", "updatedAt": "14/06/1991"}))
}

export default {
  get: get,
  post: post
}
