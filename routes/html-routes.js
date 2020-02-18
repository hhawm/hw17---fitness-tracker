// Dependencies
var path = require("path");

// Routes
module.exports = function (app) {
    // HTML routes for user
    // Sends to main page
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // Sends to exercise page
    app.get("/exercise", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    // Sends to stats page
    app.get("/stats", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
};