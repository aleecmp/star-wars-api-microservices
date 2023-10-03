const Character = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const { id } = req.params;
    const updateCharacter = await Character.update(id, req.body);
    response(res, 204, updateCharacter);
}
