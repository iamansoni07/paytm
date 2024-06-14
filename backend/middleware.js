const { JWT_SECRET} = require("./configuration");
const jwt = require("jsonwebtoken");

const authmiddleware = function(req, res, next) {
    const authHeader = req.body.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({
            message : "invalid token"
        })
    }

    const token = authHeader.split(' ')[0];
    try{
        const verify = jwt.verify(token, JWT_SECRET);
        // By doing this, the user's identity is verified once by the middleware, and their user ID is made easily available for any further operations within that request.
        req.userId = verify.userId;
        //passing the control to the next middleware
        next();
    }   
    catch(err){
        res.status(401).json({
            message : "invalid token"
        })
    }
}

module.exports = {authmiddleware};