const http = require('http')
const fs = require('fs')
const server = http.createServer((request, response) => {
    if (request.url == '/') {
        response.writeHead(200, { 'Content-type': 'text/html' })
        response.write('<p>Welcome in <b>NodeJS</b>, this page is delivered through NodeJS. Another line added</p>')
        response.end()
    }
    if (request.url == '/aboutus') {
        response.write('<h1>About us</h1>')
        response.write('<p>Optional data to write. For streams not operating in object mode, chunk must be a string, Buffer or Uint8Array. For object mode streams, chunk may be any JavaScript value other than null.</p>')
        response.end()
    }
    if (request.url == '/contactus') {
        let data = fs.readFileSync(__dirname + '/contact.html', 'utf-8')
        response.write(data.toString())
        response.end()
    }
})
const port = 80
server.listen(port)