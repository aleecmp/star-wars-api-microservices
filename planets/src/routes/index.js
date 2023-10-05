const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();

router.get("/", controllers.getAllPlanets);

router.get("/:id", controllers.getPlanetById);

router.post("/", middlewares.planetValidation, controllers.createPlanet);

router.put("/:id", middlewares.planetValidation, controllers.updatePlanet);

router.delete("/:id", controllers.deletePlanet);

module.exports = router;
