const router = require("express").Router()
const User = require("../models/user")
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')



// get user profile    /auth/
router.get('/',async (req,res)=>{
    
    try {
        const user = await User.findOne({email: req.body.email})   
        res.status(200).json(user)
    } catch (err) {
       console.log(err) 
    }
})





// Register User /auth/register
router.post('/register', async (req, res) => {
    const name = req.body.name[0]
    const email= req.body.email[0]
    const password = req.body.password[0]
    try {
        console.log(name, email, password)
        let user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ error: "This email is already registered." })
        }
        const hashed_password = await bcrypt.hash(password, 10)
        user = new User({
            name,
            email,
            password: hashed_password
        })
        user.token = jwt.sign({_id: user._id}, process.env.SECRET_KEY,{
            expiresIn: '1h'
        })
        await user.save()
       
        res.status(201).json({ message: "user created successfully" })
    } catch (err) {

    }
})


// Login user  /auth/login

router.post('/login', async (req,res)=>{
    const email= req.body.email[0]
    const password = req.body.password[0]
    try {
        let user = await User.findOne({email})
        if(!user){
            return res.status(400).json({ error: "Invalid Credintials"})
        }
          
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(400).json({ error: "Invalid Credintials"})
        }
        
        res.setHeader('Authentication', user.token)
        return res.json(user.token)
    } catch (err) {
        console.log(err)
    }
})





module.exports = router