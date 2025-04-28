const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./app/models"); // Import database models
const Role = db.role;

// Initialize dotenv for environment variables
dotenv.config();

const app = express();

// CORS configuration
var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// Parse requests of content-type - application/json
app.use(express.json());

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB using environment variable
db.mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connected to MongoDB.");
    initial(); // Call role initialization
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// Simple route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Skygoal assignment.",
    instructions: "Use /auth for authentication and /users for user management."
  });
});

// Routes (to be defined in separate files)
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);

// Set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// Initialize roles if the collection is empty
function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'admin' to roles collection");
      });
    }
  });
}