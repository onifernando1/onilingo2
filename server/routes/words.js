const words = require("../controllers/wordController.js");
const router = require("express").Router();

router.post("/", words.create);

router.get("/", words.findAll);

router.get("/:id", words.findOne);

router.put("/:id", words.update);

router.delete("/:id", words.delete);

module.exports = router;
