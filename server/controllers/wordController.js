const e = require("express");
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
    lessonId,
  } = req.body;

  pool.query(
    "INSERT INTO words (english,portuguese,last_studied_date,to_be_studied_date,times_seen,times_wrong,status,percentage,last_five_array,last_five_percentage,image,sound,lesson_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)",
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
      lessonId,
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
    res.status(200).json({ words: results.rows });
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

//Find Many

exports.findMany = (req, res) => {
  const { idsToFind } = req.body;
  console.log(idsToFind);
  const placeholders = idsToFind.map((id, index) => `$${index + 1}`).join(",");
  pool.query(
    `SELECT * FROM words WHERE id IN (${placeholders})`,
    idsToFind,
    (error, results) => {
      if (error) {
        throw error;
      } else {
        res.status(200).json(results.rows);
      }
    }
  );
};

//Find words in lesson

//Update

exports.update = (req, res) => {
  const id = req.params.id;

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
    lessonId,
  } = req.body;

  pool.query(
    "UPDATE words SET english =$1 ,portuguese = $2,last_studied_date =$3,to_be_studied_date =$4,times_seen =$5,times_wrong =$6,status =$7,percentage =$8,last_five_array =$9,last_five_percentage =$10,image =$11,sound =$12,lesson_id=$13 WHERE id =$14",
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
      lessonId,
      id,
    ],
    (error, results) => {
      if (error) {
        throw error;
      } else {
        res.status(200).send(`Word updated id: ${id}`);
      }
    }
  );
};

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

function formatDateToYYYYMMDD(date) {
  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

//Find words to review
exports.review = (req, res) => {
  const currentDate = formatDateToYYYYMMDD(new Date());
  pool
    .query("SELECT * FROM words WHERE last_studied_date <= $1", [currentDate])
    .then((result) => {
      res.status(200).json(result.rows);
    })
    .catch((error) => {
      console.error("Error", error);
      res.status(500).json({ error: "internal server error" });
    });
};
