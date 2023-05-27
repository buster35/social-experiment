const router = require("express").Router();
const {getAllUsers, getSingleUser, createUser, deleteUser, updateUser, addFriend, deleteFriend} = require("../../controllers/userController");

// /api/user
router.route("/").get(getAllUsers).post(createUser);

// /api/users/:userId
router.route("/:userId").get(getSingleUser).delete(deleteUser).put(updateUser).post(addFriend).delete(deleteFriend);

module.exports = router;
