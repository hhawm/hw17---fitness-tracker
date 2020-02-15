const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    type: {
        type: String,
        enum: ["Resistance", "Cardio"],
        required: "Select type of exercise",
    },
    duration: {
        type: Number,
        required: "Enter duration (number of minutes)",
        min: 1
    },
    name: {
        type: String,
        required: "Enter name of this exercise",
        minlength: 2,
        trim: true
    },
    weight: {
        type: Number,
    },
    repeats: {
        type: Number,
    },
    sets: {
        type: Number,
    },
    distance: {
        type: Number,
    }
});

module.exports = ExerciseSchema;