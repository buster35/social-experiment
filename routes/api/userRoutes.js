const router = require("express").Router();
const {} = require("../../controllers/userController")

// /api/users
router.route("/").get().post();

// /api/users/:userId
router.route("/:userId").get().delete().put();


