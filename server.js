var mysql = require('mysql');
var express = require("express");
var app = express();
var PORT = process.env.PORT || 9000;

app.use(express.urlencoded());
app.use(express.json());

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "FriendFinder"
});
  module.exports = con;

require("./routing/htmlRoutes")(app);
var users = require("./app/data/friends");


// API
app.get("/api/friends", function(req, res) {
    res.json(users);

    for (i = 0; i < users.length; i++) {
        if (users[i].questions[0, 1, 2, 3, 4, 5] === users[i].questions[0, 1, 2, 3, 4, 5]) {
            console.log("You matched with " + users[i].name)
        }
    }
})

 app.post("/api/friends", function(req, res) {
          users.push(req.body);
    })






app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });


  module.exports = users;