const { clientError } = require("../utils/errors");

module.exports = (req, res, next) => {
    const { title } = req.body;
    if (title) {
        next();
    }
    throw new clientError("Error on name", 401);
}
