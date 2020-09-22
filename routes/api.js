const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", (req,res)=>{
    Workout.create({})
    .then(workoutDb=>{
        res.json(workoutDb);
    })
    .catch(err=>{
        res.json(err);
    });
});

router.put("/api/workouts/:id",({body,params},res)=>{
    Workout.findByIdAndUpdate(
        params.id,{$push: {exercises:body}},{new: true, runValidators: true}
    )
    .then(workoutDb=>{
        res.json(workoutDb)
    })
    .catch(err=>{
        res.json(err);
    });
});

router.get("",(req,res)=>{
    
});

router.get("",(req,res)=>{
    
});

router.delete("",(req,res)=>{
    
});

module.exports = router;