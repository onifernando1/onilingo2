const words = require("../controllers/wordController.js");
const router = require("express").Router();

router.post("/", words.create);

router.get("/", words.findAll);

module.exports = router;
