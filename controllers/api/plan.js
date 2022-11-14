const Plan = require('../../models/plan')

// Save Plan to the Database

async function savePlan(req, res) {
    try {
     console.log(req.body);
     // Save the plan to the database
     const tripPlan = await Plan.create(req.body)
     console.log(tripPlan);
    } catch (error) {
     console.log(error);
     res.status(400).json(error)
    }
 }
 
 module.exports = {
    savePlan
}