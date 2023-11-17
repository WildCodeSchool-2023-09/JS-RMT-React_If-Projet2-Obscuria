const express = require("express");

const router = express.Router();

const client = require("../database/client");

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Route to get a list of items

// router.get("/films", (req, res) => {
//   client
//     .query("select * from film LIMIT 8 ")
//     .then((result) => res.status(200).json(result[0]))
//     .catch((error) => {
//       console.error(error);
//       res.sendStatus(500);
//     });
// });

router.get("/films", (req, res) => {
  let query = "SELECT * FROM film";
  const values = [];
  if (req.query.release_date) {
    query += " where release_date = ?";
    values.push(req.query.release_date);
  }
  query += " LIMIT 8";

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

/* ************************************************************************* */

module.exports = router;
