const server = require("./src/server");
const { createProxyMiddleware } = require("http-proxy-middleware");

server.use(
    "/database",
    createProxyMiddleware({
        target: "http://database:8004",
        changeOrigin: true,
    })
);

server.listen(8002, () => {
    console.log("*** Films microservice is listening on port 8002 ***")
});
