const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


async function create(req, res) {
   try {
    console.log(req.body);
    // Add the user to the database
    const user = await User.create(req.body)
    console.log(user);
    // Create JWT Token
    const token = createJWT(user)
    // Send token to client
    res.json(token)  
   } catch (error) {
    console.log(error);
    res.status(400).json(error)
   }
}

async function logIn(req, res) {
    try {
        const user = await User.findOne({email: req.body.email})
        const match = await bcrypt.compare(req.body.password, user.password)
        if(match){
            const token = createJWT(user)
            res.json(token)
        }
    } catch (error) {
        res.status(400).json('Bad Credentials');
    }
}

function checkToken(req, res) {
    // req.user will always be there for you when a token is sent
    console.log('req.user', req.user);
    res.json(req.exp);
  }

// -------Helper Function ------
function createJWT(user){
    return jwt.sign({user},process.env.SECRET, {expiresIn: '24h'}
    )
}

module.exports = {
    create, 
    logIn,
    checkToken,
    
}
