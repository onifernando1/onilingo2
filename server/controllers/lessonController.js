const db = require("../models");
const Lesson = db.lessons;

//Create

exports.create = (req, res) => {
  const lesson = {
    english: req.body.english,
  };

  Lesson.create(lesson)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

//Find All

exports.findAll = (req, res) => {
  Lesson.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};

//Find One

exports.findOne = (req, res) => {
  const id = req.params.id;

  Lesson.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else
        res.status(404).send({
          message: `Cannot find Lesson with id${id}`,
        });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Lesson with id=" + id,
      });
    });
};

//Update

exports.update = (req, res) => {};

//Delete

exports.delete = (req, res) => {
  const id = req.params.id;

  Lesson.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Lesson deleted" });
      } else {
        res.send(`Cannot delete Lesson id${id}`);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: `Cannot delete Lesson id${id}` });
    });
};

//Delete All

exports.deleteAll = (req, res) => {};
