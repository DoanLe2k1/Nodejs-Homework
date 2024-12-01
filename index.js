const router = require("./router/index")
const createServer = require("http").createServer;

function handleServer(request, response) {
    router.run(request, response);
}
const server = createServer(handleServer);

server.listen(3001, "127.0.0.1", () => {
    console.log("Server is online at 127.0.0.1:3001")
});