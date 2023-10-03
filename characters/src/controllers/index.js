const { catchedAsync } = require("../utils");

module.exports = {
    getAllCharacters: catchedAsync(require("./getAllCharacters")),
    getCharacterById: catchedAsync(require("./getCharacterById.js")),
    createCharacter: catchedAsync(require("./createCharacter")),
    updateCharacter: catchedAsync(require("./updateCharacter.js")),
    deleteCharacter: catchedAsync(require("./deleteCharacter.js")),
};
