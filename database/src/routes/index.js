const { Router } = require("express");
const { validateModel } = require("../middlewares");
const controllers = require("../controllers");

const router = Router();

router.get("/:model", validateModel, controllers.getAllModels);

router.get("/:model/:id", validateModel, controllers.getModelById);

router.post("/:model", validateModel, controllers.createModel);

router.put("/:model/:id", validateModel, controllers.updateModel);

router.delete("/:model/:id", validateModel, controllers.deleteModel);

module.exports = router;
