const app = require('./app')
const http = require('http');


const server = http.createServer(app);

server.listen(5100, () => {
  console.log('Server is listening on port 5100');
})