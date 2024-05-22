const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { browse, read } = require("../../../controllers/programActions");

// Route to get a list of programs
router.get("/", browse);

router.get("/:id", read); // complete path is: /api/programs/:id

/* ************************************************************************* */

module.exports = router;