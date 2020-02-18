// API routes for CRUD actions for DB
// Models
var db = require("../models");

String.prototype.toObjectId = function () {
    var ObjectId = require("mongoose").Types.ObjectId;
    return new ObjectId(this.toString());
};
module.exports = function (app) {

    db.Workout.create({ name: "Workouts" })
        .then(dbWorkout => {
            console.log(dbWorkout);
        })
        .catch(({ message }) => {
            console.log(message);
        });
    //To get All Workouts
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    // Creates new workout
    app.post("/api/workouts", function (req, res) {
        db.Workout.create(req.body).then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        })
    })

    // Find workout by Id
    app.get("/api/workouts/:id", function (req, res) {
        var id = req.params.id;
        db.Workout.findById(id, function (err, dbWorkout) {
            if (err) {
                console.error(err)
            }
            res.json(dbWorkout);
        })
    })

    // FindoneAndupdate will Find Id first, then Update
    app.put("/api/workouts/:id", (req, res) => {
        console.log(req.body);
        db.Workout.findOneAndUpdate(
            { _id: req.params.id },
            {
                $push: {
                    exercises: req.body
                },
            },
            { new: true })
            .then(dbWorkout => {
                res.json(dbWorkout);
                console.log(dbWorkout)
            }).catch(err => {
                res.json(err);
            });
    });

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
            .populate("exercises")
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });
};

