var path = require("path");


// -- Routes -- //
module.exports = function(app) {
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"))
  })
}

