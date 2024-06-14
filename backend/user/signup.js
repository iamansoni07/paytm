const z = require('zod');
const jwt = require("jsonwebtoken");    
const { JWT_SECRET } = require("../config");
const User = require('../db');

const signinSchema = z.object({
    username : z.string().email(),
    password :  z.string().min(8),
    fistname : z.string(),
    lastname : z.string()
})

router.post("/signup", async (req, res) => {
    const signedup = signinSchema.safeParse(req.body);
    if(!signedup){
        return res.status(411).json({
            message : "invalid credentials"
        })
    }

    const user = User.findOne({
        username : req.body.username
    })

    if(user._id){
        return res.status(411).json({
            message : "Email alaready taken"
        })
    }

    const dbuser = await User.create({
        username : req.body.username,
        password :  req.body.password,
        fistname : req.body.fistname,
        lastname : req.body .lastname
    })

    const userId = dbuser._id;

    const token = jwt.sign({ userId : dbuser._id }, JWT_SECRET);
    res.json({
        message : "user created successfully"
    })
})
