import { defineSupportCode } from 'cucumber'
import { assert } from 'chai'
import http from 'http'
import querystring from 'querystring'
import app from '../../src/http/server'

defineSupportCode(({Before, After, Given, When, Then}) => {
  const HTTP_PORT = process.env.HTTP_PORT || 8888
  let invite = {}
  let server

  Before((scenarioResult, done) => {
    server = app.listen(HTTP_PORT, () => {
      done()
    })
  })

  Given('a player named {username}', (username) => {
    invite.sentBy = {
      username
    }
  })

  Given('another player named {username}', (username) => {
    invite.sentTo = username
  })

  When('{username} invite luke', (username) => {
    const postData = querystring.stringify(invite)

    const options = {
      hostname: 'localhost',
      port: HTTP_PORT,
      path: '/invite',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
      }
    }

    const req = http.request(options, (res) => {
      assert.equal(200, res.statusCode)

      res.setEncoding('utf8')
      res.on('data', (data) => {
        data = JSON.parse(data)
        assert.isDefined(data._id)
        assert.isDefined(data.createdAt)
        assert.isDefined(data.updatedAt)
        assert.equal(data.sentBy.username, invite.sentBy)

        done()
      })
    })

    req.end()
  })

  After(() => {
    server.close()
  })
})
