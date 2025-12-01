const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send('hello express')
})

router.post('/register',(req,res)=>{
    res.send('register success')
})

router.post('/login',(req,res)=>{
    res.send('login success')
})



module.exports = router