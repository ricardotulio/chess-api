import assert from 'assert'
import buildInvite from '../../src/lib/invite'

describe('Invite lib', () => {
  it('Must build invite', () => {
    const from = {
      type: 'Player',
      id: 1,
      name: 'John'
    }

    const to = {
      type: 'Player',
      id: 2,
      name: 'Jennifer'
    }

    const invite = buildInvite(from, to)
    assert.equal(invite.from, from)
    assert.equal(invite.to, to)
  })
})
