const router = require('express').Router();
const {} = require('../../controllers/reactionController.js');

// /api/reaction
router.route("/").post();

// /api/reaction/:reactionId
router.route("/:reactionId");