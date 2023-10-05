const database = require("../database");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const { model, id } = req.params;
    await database[model].delete(id);
    response(res, 204, `${model} ${id} deleted successfully`);
};
