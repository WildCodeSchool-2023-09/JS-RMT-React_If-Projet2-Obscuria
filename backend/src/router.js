const express = require("express");

const router = express.Router();

const client = require("../database/client");

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Route to get a list of items
router.get("/items", (req, res) => {
  client
    .query("select * from item")
    .then((result) => res.status(200).json(result[0]))
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

router.get("/films", (req, res) => {
  client
    .query("select * from film")
    .then((result) => res.status(200).json(result[0]))
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

// Route to get a specific item by ID
router.get("/items/:id", (req, res) => {
  res.send("Hello World!");
});

// Route to add a new item
router.post("/items", (req, res) => {
  res.send("Hello World!");
});

/* ************************************************************************* */

module.exports = router;
