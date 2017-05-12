module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN
  });
  return Post;
};
