const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ExerciseSchema = require("./exercise.js");

// New workout
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now

    },
    exercises: [
        ExerciseSchema
    ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;