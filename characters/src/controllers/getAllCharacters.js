const Character = require("../data");
const { response } = require("../utils");

module.exports = async (_req, res) => {
    const characters = await Character.list();
    response(res, 200, characters);
}
