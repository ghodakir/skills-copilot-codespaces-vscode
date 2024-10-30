// Create web server
// Create a web server that listens on port 3000 and serves the comment.html file. Use the fs module to read the comment.html file and send it to the client. Use the http module to create the server.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('./comment.html', (err, data) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
  });
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});