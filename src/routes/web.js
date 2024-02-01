const express = require("express");
const router = express.Router();
const { getHomepage, getDemo} = require("../controllers/homeController");
// khai báo route
router.get("/demoServer", getHomepage);
router.get("/getOk", getDemo);

module.exports = router;
