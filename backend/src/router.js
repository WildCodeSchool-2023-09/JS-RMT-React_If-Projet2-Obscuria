const express = require("express");

const router = express.Router();

const client = require("../database/client");

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Route to get a list of items

router.get("/films", (req, res) => {
  client
    .query("select * from film")
    .then((result) => res.status(200).json(result[0]))
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

/* ************************************************************************* */

module.exports = router;
