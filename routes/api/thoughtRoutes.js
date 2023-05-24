const router = require("express").Router();
const {} = require("../../controllers/thoughtController");

// /api/thoughts
router.route("/").get().post();

// // /api/thoughts/:thoughtId
// router.route("/:thoughtId");