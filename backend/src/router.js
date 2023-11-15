const express = require("express");

const router = express.Router();

const client = require("../database/client");

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Route to get a list of items
router.get("/film", (req, res) => {
  client
    .query("SELECT * FROM film LIMIT 8")
    .then((result) => res.status(200).json(result[0]))
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

// Route to get a specific item by ID
router.get("/film/limit", (req, res) => {
  client
    .query("SELECT * FROM film ORDER BY release_date desc LIMIT 3")
    .then((result) => res.status(200).json(result[0]))
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

// Route to add a new item

/* ************************************************************************* */

module.exports = router;
