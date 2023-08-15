const pool = require("../queries");

//Create

exports.create = (req, res) => {
  const {
    wordArray,
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
    lessonId,
  } = req.body;

  pool.query(
    "INSERT INTO phrases (word_array,last_studied_date,to_be_studied_date,times_seen,times_wrong,status,percentage,last_five_array,last_five_percentage,image,sound, lesson_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)",
    [
      wordArray,
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
      lessonId,
    ],

    (error, results) => {
      if (error) {
        throw error;
      } else {
        res.status(201).send(`Phrase Added`);
      }
    }
  );
};

//Find All

exports.findAll = (req, res) => {
  pool.query("SELECT * FROM phrases ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

//Find One

exports.findOne = (req, res) => {
  const id = req.params.id;

  pool.query("SELECT * FROM phrases WHERE id=$1", [id], (error, results) => {
    if (error) {
      throw error;
    } else {
      res.status(200).json(results.rows);
    }
  });
};

//Update

exports.update = (req, res) => {
  const id = req.params.id;

  const {
    wordArray,
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
    lessonId,
  } = req.body;

  pool.query(
    "UPDATE phrases SET word_array = $1,last_studied_date =$2,to_be_studied_date =$3,times_seen =$4,times_wrong =$5,status =$6,percentage =$7,last_five_array =$8,last_five_percentage =$9,image =$10,sound =$11, lesson_id=$12 WHERE id =$13",
    [
      wordArray,
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
      lessonId,
      id,
    ],
    (error, results) => {
      if (error) {
        throw error;
      } else {
        res.status(200).send(`Phrase updated id: ${id}`);
      }
    }
  );
};

//Delete

exports.delete = (req, res) => {
  const id = req.params.id;

  pool.query("DELETE FROM phrases WHERE id=$1", [id], (error, results) => {
    if (error) {
      throw error;
    } else {
      res.status(200).send(`Phrase deleted ${id}`);
    }
  });
};

//Delete All

exports.deleteAll = (req, res) => {};
