const express = require("express");
const router = express.Router();
const { getHomepage, getWebpage, postCreateUser, getPageCreateUser,getUpdateUser, postUpdateUser, postDeleteUser,demoFucExpress } = require("../controllers/homeController");
// khai báo route
router.get("/", getHomepage);
router.get("/abc", getWebpage);
router.post("/create-user", postCreateUser);
router.get("/page-create-user", getPageCreateUser)
router.get("/update/:userId",getUpdateUser);
router.post('/postUpdateUser', postUpdateUser);
router.get('/postDeleteUser/:userId', postDeleteUser)


module.exports = router;
