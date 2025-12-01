const UserModel = require("../models/UserSchema")
const bcrypt = require('bcrypt');


// registration

const Register =async (req,res)=>{
    try {
        const {name ,email,password} = req.body

        if(!name || !email || !password) return res.status(400).send({error : 'all feild must be filled in'})
         const hasPass = await bcrypt.hash(password, 10);
        const user =new UserModel({
            name,
            email,
            password 
            
        })
        user.save()

        res.status(201).send({success : 'Registration successful'})
    } 
    
    catch (error) {
      console.log(error)    
    }
}



module.exports = {Register}

