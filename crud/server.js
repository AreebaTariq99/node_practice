const express = require("express");
// Importing events
const EventEmitter = require('events');
// Initializing event emitter instances
var emitter = new EventEmitter();
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

require("./app/routes/turorial.routes")(app);

// set port, listen for requests
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
 
// Registering first event  myEvent
const fun1=(msg) => {
  console.log(msg);
}
emitter.on('myEvent', fun1);
// Registering second event 
emitter.on('start', (start, end) => {
  console.log(`started from ${start} to ${end}`);
});
 
// Triggering Events

emitter.emit('myEvent', "First event");

emitter.emit('start', 1, 100);
// removing
emitter.removeListener('myEvent', fun1);