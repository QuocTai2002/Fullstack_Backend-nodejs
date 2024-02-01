const express = require("express");
const router = express.Router();
const { getHomepage} = require("../controllers/homeController");
// khai báo route
router.get("/demoServer", getHomepage);

module.exports = router;
