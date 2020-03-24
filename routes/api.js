const db = require("../models");

module.exports = function(app) {

  // GET
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.json(err);
    });
  });

   // POST
  app.post("/api/workouts", async (req, res)=> {
    try{
      const response = await db.Workout.create({type: "workout"})
      res.json(response);
    }
    catch(err){
      console.log("There was a problem", err)
    };
  });
};