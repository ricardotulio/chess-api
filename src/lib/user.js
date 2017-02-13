import R from 'ramda'

export const buildUser = R.curry((username, password) => ({
  type: 'User',
  username: username,
  password: password
}))
