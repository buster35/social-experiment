const router = require("express").Router();
const {getThoughts, createThought} = require("../../controllers/thoughtController");

// /api/thoughts
router.route("/").get(getThoughts).post(createThought);

// // /api/thoughts/:thoughtId
// router.route("/:thoughtId");

module.exports = router;
