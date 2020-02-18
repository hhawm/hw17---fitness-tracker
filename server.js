const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Sets port to localhost:3000
const PORT = process.env.PORT || 3000;

// App requires express
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("/public"));

// MongoDB_URI reference
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// Requires these routes so app knows what to load
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Starts server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});

