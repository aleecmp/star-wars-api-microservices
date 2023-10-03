const server = require("./src/server");
const { createProxyMiddleware } = require("http-proxy-middleware");

server.use(
    "/database",
    createProxyMiddleware({
        target: "http://database:8004",
        changeOrigin: true,
    })
);

server.listen(8001, () => {
    console.log("*** Characters microservice is listening on port 8001 ***")
});
