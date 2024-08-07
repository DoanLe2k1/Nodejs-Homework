const { sayPong, sayHello } = require('./controller');

function router(req, res) {
  if (req.url === "/" ) {
    if (req.method === "GET") { 
      sayHello(req, res);
    } else {
      res.statusCode = 405;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Methods Not Allowed');
    }
  } else if (req.url === "/ping" ) {
    if (req.methods === "GET") {
      sayPong(req, res);
    } else {
      res.statusCode = 405;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Methods Not Allowed');
    }
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
}

module.exports = {
  router
}
  