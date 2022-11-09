const express = require('express')
const usersCtrl = require('../../controllers/api/users');
const router = express.Router();


const ensureLoggedIn = require('../../config/ensureLoggedIn');
// POST /api/users

// router.post('/', (req, res) => {
// })

// GET /api/users/check-token
router.get('/check-token', ensureLoggedIn,  usersCtrl.checkToken);


//  /api/users
router.post('/', usersCtrl.create);

router.post('/login', usersCtrl.logIn)



module.exports = router