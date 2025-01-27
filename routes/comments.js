const express = require("express");
const router = express.Router();
const commentControllers = require("../controllers/commentControllers");
const { verifyToken } = require("../middleware/auth");

router.patch("/:id", verifyToken, commentControllers.updateComment);
router.post("/:id", verifyToken, commentControllers.createComment);
router.delete("/:id", verifyToken, commentControllers.deleteComment);
router.get("/post_comments/:id", commentControllers.getPostComments);

module.exports = router;
