const server = require("./src/server");

const { Character, Film } = require("./src/database");

server.listen(8004, () => {
    console.log("Database service on PORT 8004");
});
