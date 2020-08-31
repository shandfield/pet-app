const router = require("express").Router();
const animalRoutes = require("./animal");

// Book routes
router.use("/animal", animalRoutes);

module.exports = router;
