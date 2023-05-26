const router = require("express").Router();
const {getThoughts, createThought, updateThought} = require("../../controllers/thoughtController");

// /api/thought
router.route("/").get(getThoughts).post(createThought);

router.route("/:thoughtId").put(updateThought);

module.exports = router;
