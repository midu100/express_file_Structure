const express = require('express')
const { Register, Login } = require('../controllers/authController')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send('hello express')
})

router.post('/register',Register)

router.post('/login',Login)



module.exports = router