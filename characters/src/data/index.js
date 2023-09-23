const characters = require("./characters.json");

module.exports = {
    list: async () => characters,
    create: async () => {
        return {
            name: "Test Character",
            description: "This is a test character",
        };

    }
}
