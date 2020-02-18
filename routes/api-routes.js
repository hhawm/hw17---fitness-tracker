// API routes for CRUD actions for DB
// Models
var db = require("../models");

// Routes 
module.exports = function (app) {
    // Get route for getting all workouts
    app.get("/api/workouts", function (req, res) {
        // getting it out of Workout.js in models.
        db.Workout.find({}).then(function (dbWorkout) {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        })
    })
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}).then(function (dbWorkout) {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });
    })

    // Get single workout by id#
    app.get("/api/workouts/:id", function (req, res) {
        var id = req.params.id;
        db.Workout.findById(id, function (err, dbWorkout) {
            if (err) {
                console.error(err)
            }
            res.json(dbWorkout);
        })
    })

    // Post new workout in db
    app.post("/api/workouts/", function (req, res) {
        db.Workout.create({ exercise: req.body }).then(function (dbWorkout) {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        })
    })

    // Find and update a workout with another exercise in db by id
    app.put("/api/workouts/:id", function (req, res) {
        var query = { _id: req.params.id };
        db.Workout.findOneAndUpdate(query, {
            $push: { exercises: [req.body] }
        }, function (err, dbWorkout) {
            if (err) {
                res.json(err);
            } else {
                res.json(dbWorkout);
            }
        })
    })
}
