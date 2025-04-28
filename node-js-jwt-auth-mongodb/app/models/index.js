const mongoose = require("mongoose");
mongoose.Promise = global.Promise; // Use global Promise for mongoose

const db = {};

// Mongoose instance
db.mongoose = mongoose;

// Import models
db.user = require("./user.model"); // User model
db.role = require("./role.model"); // Role model

// Predefined roles
db.ROLES = ["user", "admin", "moderator"];

module.exports = db;