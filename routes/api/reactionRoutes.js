const router = require("express").Router();
const { createReaction, deleteReaction } = require("../../controllers/thoughtController.js");

// /api/reaction/:reactionId
router.route("/:reactionId").delete(deleteReaction).post(createReaction);

module.exports = router;
