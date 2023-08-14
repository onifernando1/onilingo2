const db = require("../models");
const Word = db.words;

//Create

exports.create = (req, res) => {
  const word = {
    english: req.body.english,
    portuguese: req.body.portuguese,
    lastStudied: req.body.lastStudied,
    toBeStudiedDate: req.body.toBeStudiedDate,
    timesSeen: 0,
    timesWrong: 0,
    status: "initial",
    percentage: 0,
    lastFiveArray: [],
    lastFivePercentage: 0,
    image: req.body.image,
    sound: req.body.sound,
  };

  Word.create(word)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

//Find All

exports.findAll = (req, res) => {
  Word.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};

//Find One

exports.findOne = (req, res) => {};

//Update

exports.update = (req, res) => {};

//Delete

exports.delete = (req, res) => {};

//Delete All

exports.deleteAll = (req, res) => {};
