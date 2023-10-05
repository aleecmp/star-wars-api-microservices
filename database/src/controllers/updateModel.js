const database = require("../database");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const { model, id } = req.params;
    const data = await database[model].upsert(id, req.body);
    response(res, 204, data);
};
