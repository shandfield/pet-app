const router = require("express").Router();
const animalController = require("../../controllers/animalController");

// Matches with "/api/animal"
router.route("/")
  .get(animalController.findAll)
  .post(animalController.create);

// Matches with "/api/animal/:id"
router
  .route("/:id")
  .get(animalController.findById)
  .put(animalController.update)
  .delete(animalController.remove);

module.exports = router;
