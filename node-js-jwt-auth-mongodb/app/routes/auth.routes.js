const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");

module.exports = function (app) {
  // Middleware to set custom headers for CORS
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // Route for user signup
  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail, // Middleware to check for duplicate username or email
      verifySignUp.checkRolesExisted // Middleware to validate roles during signup
    ],
    controller.signup // Controller method to handle signup logic
  );

  // Route for user signin
  app.post("/api/auth/signin", controller.signin); // Controller method to handle signin logic
};