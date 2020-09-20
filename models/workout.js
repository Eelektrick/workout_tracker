const mongoose = require("mongoose");

const Schema = new Schema({
    day:{
        type: Date,
        default:()=>new Date()
    },
    exercises:[
        {
            type:{
                type: String,
                trim: true,
                required:"Enter an exercise type"
            },
            name:{
                type: String,
                trim: true,
                required:"Enter the exercise name"
            },
            duration:{
                type: Number,
                required:"Enter the exercise duration in minutes"
            },
            weight:{
                type: Number
            },
            reps:{
                type: Number
            },
            sets:{
                type: Number
            },
            distance:{
                type: Number
            }
        }
    ]
});

const Workout = mongoose.model("Workout", workoutShema);

module.exports = Workout;