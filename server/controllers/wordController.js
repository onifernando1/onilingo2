const pool = require("../queries");

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
  pool.query("SELECT * FROM words ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

//Find One

exports.findOne = (req, res) => {
  const id = req.params.id;

  pool.query("SELECT * FROM words WHERE id=$1", [id], (error, results) => {
    if (error) {
      console.error(error);
    } else {
      res.status(200).json(results.rows);
    }
  });
};

//Update

exports.update = (req, res) => {};

//Delete

exports.delete = (req, res) => {
  const id = req.params.id;

  Word.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Word deleted" });
      } else {
        res.send(`Cannot delete Word id${id}`);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: `Cannot delete Word id${id}` });
    });
};

//Delete All

exports.deleteAll = (req, res) => {};
