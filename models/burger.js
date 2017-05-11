var orm = require("../config/orm.js");

var burgerModel = {
  all: function(cb) {
    orm.all("burgers", function(response){
      cb(response);
    });
  },
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller
module.exports = burgerModel;
