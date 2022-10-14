'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    userName: DataTypes.STRING,
    Password: DataTypes.STRING,
    email: DataTypes.STRING
  },
  {
    hooks: {
      beforeValidate: (user, options) => {
        user.mood = 'happy';
      },
      afterCreate: (user, options) => {
        console.log("New User created:");
        console.log(user.firstName);
        console.log(user.email);
      }
    }, 
    sequelize,
    modelName: 'User',
});
  return User;
};