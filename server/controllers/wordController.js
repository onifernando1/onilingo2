const pool = require("../queries");

//Create

exports.create = (req, res) => {
  const {
    english,
    portuguese,
    lastStudiedDate,
    toBeStudiedDate,
    timesSeen,
    timesWrong,
    status,
    percentage,
    lastFiveArray,
    lastFivePercentage,
    image,
    sound,
  } = req.body;

  pool.query(
    "INSERT INTO words (english,portuguese,last_studied_date,to_be_studied_date,times_seen,times_wrong,status,percentage,last_five_array,last_five_percentage,image,sound) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)",
    [
      english,
      portuguese,
      lastStudiedDate,
      toBeStudiedDate,
      timesSeen,
      timesWrong,
      status,
      percentage,
      lastFiveArray,
      lastFivePercentage,
      image,
      sound,
    ],

    (error, results) => {
      if (error) {
        throw error;
      } else {
        res.status(201).send(`Word Added`);
      }
    }
  );
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
      throw error;
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

  pool.query("DELETE FROM words WHERE id=$1", [id], (error, results) => {
    if (error) {
      throw error;
    } else {
      res.status(200).send(`User deleted ${id}`);
    }
  });
};

//Delete All

exports.deleteAll = (req, res) => {};
