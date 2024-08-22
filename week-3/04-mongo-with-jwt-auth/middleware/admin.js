const {JWT_SECRET} = require("../config")
const jwt = require("jsonwebtoken")
function adminMiddleware(req, res, next) {
   const token = req.headers.authorization;
   const words = token.split(" ")
   const jwtToken = words[1];

   const  decoded = jwt.verify(jwtToken, JWT_SECRET);
   if(decoded.username){
    req.username = decoded.username;
    next();
   }else {
            res.status(403).json({
                msg: "You are not authenticated"
            })
        }


   
}

module.exports = adminMiddleware;