module.exports = function(sequelize, DataTypes) {
  var SequelizedBurger = sequelize.define("SequelizedBurger", {
    burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN
  });
  return SequelizedBurger;
};
