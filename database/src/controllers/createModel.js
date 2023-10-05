const database = require("../database");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const { model } = req.params;
    const data = await database[model].insert(req.body);
    response(res, 201, data);
};
