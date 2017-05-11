var express = require("express");
var router = express.Router();
var burger = require("../models/sequelizedBurger.js");

router.get("/", function(request, response){
  burger.all(function(data){
    var hbsObject = {
    burgers: data
  };
  console.log(hbsObject);
  response.render("index", hbsObject);
  });
});

router.post("/", function(request, response){
  burger.create([
    "burger_name", "devoured"
  ],[
    request.body.burger_name, request.body.devoured
  ], function() {
    response.redirect("/");
    console.log("the post has happened");
  });
});

router.put("/:id", function(request, response) {
  var condition = "id = " + request.params.id;
  console.log("condition", condition);

  burger.update({
    devoured: request.body.devoured
  }, condition, function() {
    response.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
