User = require('../Models/user.model.js');
becrypt = require('bcryptjs');
const signup = async (req,res)=>{
   try{

       let {fullname, email,password,role} = req.body;
       let user = await User.findOne({email});
       if(email){
           res.status(400).json({message:"Email is already exist"});
        }
        if(password.length < 8){
            res.status(400).json({message:"Password is weak"});
        }
        if(mobileno.length != 10){
            res.status(400).json({message:"Enter 10 digit no"});
        }
        const hash = await bcrypt.hash(password, salt);
        user = new User(
            {   fullname,
                email,
                password:hash,
                role}
        );

    }catch(error){
        res.status(500).json({message:"Error in signup", error:error.message});
    }

    
}
module.exports = {auth};