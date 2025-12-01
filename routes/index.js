const express = require('express')
const { Register } = require('../controllers/authController')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send('hello express')
})

router.post('/register',Register)

router.post('/login',(req,res)=>{
    res.send('login success')
})



module.exports = router