const films = require("./films.json");

module.exports = {
    list: async () => films,
    create: async () => {
        return {
            name: "Test Character",
            description: "This is a test character",
        };

    }
}
