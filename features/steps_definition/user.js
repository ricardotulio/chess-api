import { defineSupportCode } from 'cucumber'
import { assert } from 'chai'
import http from 'http'
import querystring from 'querystring'
import server from '../../src/http/server';

defineSupportCode(({Before, After, Given, When, Then}) => {
  const HTTP_PORT = process.env.HTTP_PORT || 8888
  let user = {}

  Before((scenarioResult, done) => {
    server.listen(HTTP_PORT, () => {
      done()
    })
  })

  Given('a username {username}', (username) => {
    user.username = username
  })

  Given('a password {password}', (password) => {
    user.password = password
  })

  When('I submit the new user information', (done) => {
    const postData = querystring.stringify(user)

    const options = {
      hostname: 'localhost',
      port: HTTP_PORT,
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
        assert.isDefined(data._id)
        assert.isDefined(data.createdAt)
        assert.isDefined(data.updatedAt)
        assert.equal(data.username, user.username)

        user = data;

        done()
      })
    })

    req.write(postData);
  })

  Then('the new account must be created', (done) => {
    const options = {
      hostname: 'localhost',
      port: HTTP_PORT,
      path: '/user/' + user._id,
      method: 'GET',
    }

    const req = http.request(options, (res) => {
      assert.equal(200, res.statusCode)

      res.setEncoding('utf8')
      res.on('data', (data) => {
        data = JSON.parse(data)
        assert.equal(user._id, data._id)
        assert.equal(user.username, data.username)
        assert.equal(user.createdAt, data.createdAt)
        assert.equal(user.updatedAt, data.updatedAt)

        done()
      })
    })

    req.end()
  })

  After(() => {
  })
})
