const express = require("express");
const router = express.Router();
const { getHomepage, getWebpage, postCreateUser, getPageCreateUser,getUpdateUser, postUpdateUser, postDeleteUser,demoFucExpress } = require("../controllers/homeController");
// khai báo route
router.get("/", getHomepage);

module.exports = router;
