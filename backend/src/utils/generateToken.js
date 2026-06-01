const jwt=require("jsonwebtoken"); module.exports=(u)=>jwt.sign({id:u._id,role:u.role},process.env.JWT_SECRET||"dev_secret",{expiresIn:"7d"});
