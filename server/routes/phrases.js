const phrases = require("../controllers/phraseController.js");
const router = require("express").Router();

router.post("/", phrases.create);

router.get("/", phrases.findAll);

router.get("/:id", phrases.findOne);

router.put("/:id", phrases.update);

router.delete("/:id", phrases.delete);

module.exports = router;
