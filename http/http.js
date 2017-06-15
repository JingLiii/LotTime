const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((request, response) => {

  var content = ''

  // 需要转发请求配置
  var options = {
    host: 'http://api.jisuapi.com/calendar/holiday?appkey=edb2c1897774b60c',
    method: 'GET'
  }

  // 转发请求
  var req = http.request(options, function (res) {
    res.on('data', function (body) {
      console.log('return')
      content += body
    })
    .on('end', function () {
      response.writeHead(200, {'Content-Type': 'text/html'})
      response.write(content)
      response.end()
    })
  }).on('err', function (err) {
    console.log('Got err' + err)
  })
  req.end()
})

server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`)
})
