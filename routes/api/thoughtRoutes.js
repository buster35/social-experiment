const router = require("express").Router();
const {getThoughts, createThought, updateThought} = require("../../controllers/thoughtController");

// /api/thought
router.route("/").get(getThoughts);

router.route("/:thoughtId").put(updateThought).post(createThought);

module.exports = router;
