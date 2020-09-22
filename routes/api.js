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

router.get("/api/workouts",(req,res)=>{
    Workout.find()
    .then(workoutDb => {
      res.json(workoutDb);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("",(req,res)=>{
    
});

router.delete("/api/workouts",({body},res)=>{
    Workout.findByIdAndDelete(body.id)
    .then(()=>{
        res.json(true);
    })
    .catch(err => {
        res.json(err);
    });
});

module.exports = router;