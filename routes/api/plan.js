const express = require('express')
// const planCtrl = require('../../controllers/api/users');
const router = express.Router();
const Plan = require('../../models/plan')


// POST /api/users

// router.get('/check-token', ensureLoggedIn,  usersCtrl.checkToken);


// Save itinerary
router.get('/', async (req, res) => {
    try {
        const dayPlans = await Plan.find();
        res.json(dayPlans)
    } catch (error) {
        res.status(404).json(error)
    }
})


router.post('/', async (req, res) => {
    
    try {
        const newPlan = new Plan(req.body)
        const savedPlan = await newPlan.save()
        res.status(200).json(savedPlan)
    } catch (error) {
        res.status(404).json(error);
    }
});

// router.post('/saveditinerary', Plan.create);

// get all plan
// router.get('/', async (req, res) => {
//     try {
//         const plans = await Plan.find();
//         res.status(200).json(plans)
//     } catch (error) {
//         res.status(404).json(error)
//     }
// })


module.exports = router