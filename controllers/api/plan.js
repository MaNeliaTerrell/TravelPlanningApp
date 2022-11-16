// const Plan = require('../../models/plan')

// // Save Plan to the Database

// async function savePlan(req, res) {
//     try {
//      // Save the plan to the database
//      const tripPlan = await new Plan.create({name: req.body.name, img: req.body.img, location: req.body.location, website: req.body.website})
//     // const saveTrip = await tripPlan.save()

//     res.status(200).send(saveTask);
//     } catch (error) {
//      res.status(400).json(error)
//     }
//  }
 
//  async function readPlan (req, res) {
//     try {
//         const allPlans = await Plan.find({})
//         res.status(200).json(allPlans)
//     } catch (error) {
//         res.status(400).json(err)
//     }
//  }

//  async function updatePlan (req, res) {
//     try {
//         const editPlan = await Plan.findByIdAndUpdate(req.params.id, req.body)
//         res.status(200).json(editPlan)
//     } catch (error) {
//         res.status(400).json(error)
        
//     }
//  }

//  async function deletePlan(req, res) {
//     try {
//         await Plan.findByIdAndDelete(reqq.params.id)
//         res.status(200).send('DELETED')
//     } catch (error) {
//         res.status(400).json(error)
//     }
//  }


//  module.exports = {
//     savePlan,
//     readPlan,
//     updatePlan,
//     deletePlan,
// }