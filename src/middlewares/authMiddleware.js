const jwt = require("jsonwebtoken");

const authMiddleware = {
  // verifyToken
  verifyToken: (req, res, next) => {
    const token = req.headers.token;
    if (token) {
      const access_Token = token.split(" ")[1];
      jwt.verify(access_Token, process.env.JWT_ACCESS_KEY, (err, user) => {
        if (err) {
          return res.status(403).json({
            status: 403,
            message: "Token is not valid",
            date: Date(),
          });
        }
        req.user = user;
        next();
      });
    } else {
      res.status(401).json({
        status: 403,
        message: "you're not authenticated",
        date: Date(),
      });
    }
  },
  //verify admin
  verifyTokenAndAdminAuth: (req, res, next) => {
    authMiddleware.verifyToken(req, res, () => {
      if (req.user.id != req.query.id  && req.user.admin) {
        next();
      } else {
        res.status(403).json({
          status: 403,
          message: "you're not allowed to delete other",
          date: Date(),
        });
      }
    });
  },
};
module.exports = authMiddleware;
