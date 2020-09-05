const router = require("express").Router();
const chatController = require("../controllers/chat");

router.route("/test").get(chatController.testingAPI);

module.exports = router;
