const buildUser = (username, password) => ({
  type: 'User',
  username,
  password,
})

export default buildUser
