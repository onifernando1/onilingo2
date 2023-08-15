const pool = require("../queries");

//Create

exports.create = (req, res) => {
  const { name, number } = req.body;

  pool.query(
    "INSERT INTO lessons (name,number) VALUES ($1,$2)",
    [name, number],

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

//Find One

exports.findOne = (req, res) => {
  const id = req.params.id;

  pool.query("SELECT * FROM lessons WHERE id=$1", [id], (error, results) => {
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

  const { name, number } = req.body;

  pool.query(
    "UPDATE lessons SET name =$1 ,number = $2 WHERE id=$3",
    [name, number, id],
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
