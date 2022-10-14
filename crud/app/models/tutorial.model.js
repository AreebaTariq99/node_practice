module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("tutorial", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });
  Tutorial.addHook('beforeCreate', (Tutorial, options) => {
    console.log("Data are ..");
  });
  Tutorial.addHook('afterCreate', (Tutorial, options) => {
    console.log("Data added successfully");
    console.log(Tutorial.title);
    console.log(Tutorial.description);
  });
  // Tutorial.addHook('beforeUpdate', (Tutorial, options) => {
  //   console.log("Data will update ");
  // });
  Tutorial.addHook('afterUpdate', (Tutorial, options) => {
    console.log("Data updated successfully");
    console.log(Tutorial.title);
    console.log(Tutorial.description);
  });
  return Tutorial;
};
