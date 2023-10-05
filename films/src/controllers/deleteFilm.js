const Film = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const { id } = req.params;
    const film = await Film.delete(id);
    response(res, 200, { message: `Film with ID ${id} has been successfully deleted` })
};
