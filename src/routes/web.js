const express = require('express')
const router = express.Router()

// khai báo route
router.get("/", (req, res) => {
  res.send("Hello World!");
});
router.get("/abc", (req, res) => {
  res.render("sample.ejs");
});


module.exports = router;