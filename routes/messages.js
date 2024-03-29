const express = require("express");
const router = express.Router();
const messageController = require("../controllers/messageController");
const { verifyToken } = require("../middleware/auth");

router.get("/", verifyToken, messageController.getConversations);
router.post("/:id", verifyToken, messageController.sendMessage);
router.get("/:id", verifyToken, messageController.getMessages);
// router.delete("/:id",verifyToken, messageController.deleteMessage);

module.exports = router;
