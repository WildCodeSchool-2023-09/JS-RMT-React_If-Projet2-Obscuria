const express = require("express");

const router = express.Router();

const client = require("../database/client");

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

router.get("/films", (req, res) => {
  let query = "SELECT * FROM film";
  const values = [];
  if (req.query.releaseDate) {
    query += " where release_date = ?";
    values.push(req.query.releaseDate);
  }
  if (req.query.limit) {
    query += " LIMIT ?";
    values.push(parseInt(req.query.limit, 10));
  }

  client
    .query(query, values)
    .then((result) => {
      res.status(200).json(result[0]);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

router.get("/films/:id", (req, res) => {
  const id = +req.params.id;
  client
    .query("select * from film where id = ?", [id])
    .then(([film]) => {
      if (film[0] != null) {
        res.status(200).json(film[0]);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

module.exports = router;
