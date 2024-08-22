const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const zod = require("zod");

const emailSchema = zod.string().email();
const passSchema = zod.string().min(6)


/**
 * Generates a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */
function signJwt(username, password) {
    const userNameResponse = emailSchema.safeParse(username);
    const passResponse = passSchema.safeParse(password)
    if(userNameResponse.success && passResponse.success){
      const token = jwt.sign({username,password}, jwtPassword);
      return token;
    }
      return null;
    
}

/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {
    // Your code here
    try{
        const verified = jwt.verify(token, jwtPassword);
        console.log(verified)
        if(verified){
            return true;
        }
    }catch(err){
        return false;
    }
        
    
  
    
}

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {
    // Your code here
    const decoded = jwt.decode(token);
    console.log(decoded)
   if(decoded){
    return true;
   }else{
    return false;
   }
}
console.log(signJwt("shiva@gamil.com", "123123"))
console.log(verifyJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNoaXZhQGdhbWlsLmNvbSIsImlhdCI6MTcyMTIxNTk5Nn0.T58gzfmN1wzFgzrnalQHI-PhkWhdysAoffGaC76BSOY"))
console.log(decodeJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNoaXZhQGdhbWlsLmNvbSIsImlhdCI6MTcyMTIxNTk5Nn0.T58gzfmN1wzFgzrnalQHI-PhkWhdysAoffGaC76BSOY"))
module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
