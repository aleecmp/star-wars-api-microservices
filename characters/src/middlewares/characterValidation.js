const { clientError } = require("../utils/errors")

module.exports = (req, res, next) => {
    const { name } = req.body;
    if (name) {
        next();
    }
    throw new clientError("Error on name", 401);
};
