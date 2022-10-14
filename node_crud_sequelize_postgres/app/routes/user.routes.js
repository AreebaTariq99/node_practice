

    const user = require("../controllers/user.controller.js");
    // adding middlewares
    const {addUserValidation} = require("../middlewares/user.middleware")

    const router = require("express").Router();
  
    // Create a new user
    router.post("/", addUserValidation,user.create);
  
    // Retrieve all user
    router.get("/", user.findAll);
  

    // Retrieve a single user with id
    router.get("/:id", user.findOne);
  
    // Update a user with id
    router.put("/:id", user.update);
  
    // Delete a user with id
    router.delete("/:id", user.delete);
  
    // Delete all user
    router.delete("/", user.deleteAll);

  
module.exports = router;

  