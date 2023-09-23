const server = require("./src/server");

server.listen(8001, () => {
    console.log("*** Characters microservice is listening on port 8001 ***")
});
