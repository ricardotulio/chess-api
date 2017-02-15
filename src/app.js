import server from './http/server'

const HTTP_PORT = process.env.HTTP_PORT || 8888

server.listen(HTTP_PORT, () => {
  console.log(`Listing on port ${HTTP_PORT}`)
})
