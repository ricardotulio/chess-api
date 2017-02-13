import assert from 'assert'
import { buildUser } from '../../src/lib/user'

describe('User lib', () => {
  it('Must build user', () => {
    const username = 'John'
    const password = '123456'
    const user = buildUser(username, password)

    assert.equal(user.type, 'User')
    assert.equal(user.username, username)
    assert.equal(user.password, password)
  })
})
