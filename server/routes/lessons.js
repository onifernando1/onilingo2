const lessons = require("../controllers/lessonController.js");
const router = require("express").Router();

router.post("/", lessons.create);

router.get("/", lessons.findAll);

router.get("/:id", lessons.findOne);

router.put("/:id", lessons.update);

router.delete("/:id", lessons.delete);

module.exports = router;
