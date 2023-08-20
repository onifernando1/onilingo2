const pool = require("../queries");

//Create

exports.create = (req, res) => {
  const { name, number, timesCompleted } = req.body;

  pool.query(
    "INSERT INTO lessons (name,number,times_completed) VALUES ($1,$2,$3)",
    [name, number, timesCompleted],

    (error, results) => {
      if (error) {
        throw error;
      } else {
        res.status(201).send(`Lesson Added`);
      }
    }
  );
};

//Find All

exports.findAll = (req, res) => {
  pool.query("SELECT * FROM lessons ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

//Find One + Find words in lesson

exports.findOne = async (req, res) => {
  const id = req.params.id;

  try {
    const lessonRequest = await pool.query(
      "SELECT * FROM lessons WHERE id=$1",
      [id]
    );
    const lesson = lessonRequest.rows;
    const wordsRequest = await pool.query(
      "SELECT * FROM words WHERE lesson_id=$1",
      [id]
    );
    const words = wordsRequest.rows;
    res.status(200).send({ lesson: lesson, words: words });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};

//Update

exports.update = (req, res) => {
  const id = req.params.id;

  const { name, number, timesCompleted } = req.body;

  pool.query(
    "UPDATE lessons SET name =$1 ,number = $2, times_completed=$3 WHERE id=$4",
    [name, number, timesCompleted, id],
    (error, results) => {
      if (error) {
        throw error;
      } else {
        res.status(200).send(`Lesson updated id: ${id}`);
      }
    }
  );
};

//Delete

exports.delete = (req, res) => {
  const id = req.params.id;

  pool.query("DELETE FROM lessons WHERE id=$1", [id], (error, results) => {
    if (error) {
      throw error;
    } else {
      res.status(200).send(`Lesson deleted ${id}`);
    }
  });
};

//Delete All

exports.deleteAll = (req, res) => {};
