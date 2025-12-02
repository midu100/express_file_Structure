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
            password : hasPass
            
        })
        user.save()

        res.status(201).send({success : 'Registration successful'})
    } 
    
    catch (error) {
      console.log(error)    
    }
}


// Login

const Login =async (req,res)=>{
    try {
        const {email,password} = req.body
        const existUser = await UserModel.findOne({email})

        if(!email || !password) return res.status(400).send({error : 'all feild must be filled in'})
        
        if(!existUser) return res.send({success : 'user not found'})

        const match = await bcrypt.compare(password, existUser.password);

        if(!match) return res.status(400).send({error : 'Incorrect Password'})

        console.log(match)


        // success
        res.status(200).send({success : 'lodin success'})


    } 
    catch (error) {
       console.log(error)    
    }
}



module.exports = {Register,Login}

