const planets = require("./planets.json");

module.exports = {
    list: async () => planets,
    create: async () => {
        return {
            name: "Test Planet",
            description: "This is a test planet",
        };

    }
}
