function sayHello(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!!!!!!!!!');
}
function sayPong(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Pong');
}
module.exports = {
  sayHello,
  sayPong
}