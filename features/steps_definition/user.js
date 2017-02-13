import { defineSupportCode } from 'cucumber'
import { assert } from 'chai'
import http from 'http'
import querystring from 'querystring'

defineSupportCode(({Given, When, Then}) => {
  let user = {}

  Given('a username {username}', (username) => {
    user.username = username
  })

  Given('a password {password}', (password) => {
    user.password = password
  })

  When('I submit the new user information', (done) => {
    const postData = querystring.stringify(user)

    const options = {
      hostname: '172.24.0.2',
      port: 80,
      path: '/user',
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
        assert.isDefined(data.id)
        assert.isDefined(data.createdAt)
        assert.isDefined(data.updatedAt)
        assert.equal(data.username, user.username)

        user.id = data.id;

        done()
      })
    })

    req.write(postData);
  })

  Then('the new account must be created', (done) => {
    const options = {
      hostname: '172.24.0.2',
      port: 80,
      path: '/user/' + user.id,
      method: 'GET',
    }

    const req = http.request(options, (res) => {
      assert.equal(200, res.statusCode)

      res.setEncoding('utf8')
      res.on('data', (data) => {
        data = JSON.parse(data)
        assert.isDefined(data.id)
        assert.isDefined(data.createdAt)
        assert.isDefined(data.updatedAt)
        assert.equal(data.username, user.username)

        done()
      })
    })

    req.end()
  })
})
