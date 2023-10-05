const { catchedAsync } = require("../utils");

module.exports = {
    getAllModels: catchedAsync(require("./getAllModels")),
    getModelById: catchedAsync(require("./getModelbyId")),
    createModel: catchedAsync(require("./createModel")),
    updateModel: catchedAsync(require("./createModel")),
    deleteModel: catchedAsync(require("./deleteModel"))
};
