const mongoose = require("mongoose");

// Role schema definition
const roleSchema = new mongoose.Schema({
  name: {
    type: String, // Role name (e.g., user, admin, moderator)
    required: true // Ensures the name field is mandatory
  }
});

// Create and export the Role model
const Role = mongoose.model("Role", roleSchema);

module.exports = Role;