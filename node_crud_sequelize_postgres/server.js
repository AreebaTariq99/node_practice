const express = require("express");
const app = express();
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome " });
});
app.all('*', (req, res, next) => {
  const err = new Error(`Requested URL ${req.path} not found!`, 404);
  next(err);
})

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: 0,
    message: err.message,
    stack: err.stack
  })
})
require("./app/routes/user.routes")(app);

// set port, listen for requests
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});