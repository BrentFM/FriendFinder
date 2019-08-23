var app = require("server.js");

// -- API -- //
app.get("/api/friends", function (req, res) {
    res.json(users);

    for (i = 0; i < users.length; i++) {
        if (users[i].questions[0, 1, 2, 3, 4, 5] === users[i].questions[0, 1, 2, 3, 4, 5]) {
            console.log("You matched with " + users[i].name)
        }
    }
})

app.post("/api/friends", function (req, res) {
    users.push(req.body);
})