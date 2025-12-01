const express = require('express')
const app = express()
app.use(express.json())
const dbConfig = require('./dbConfig')  // db connect file import kora hoyeche
const UserModel = require('./models/UserSchema')  // schema ba model ta ke import kora hoyeche 
dbConfig()  // db connect file call kora hoiyeche

const router = require('./routes')   // router / endponit import kora holo
app.use(router)




app.listen('1000',()=>{
    console.log(`server is Running.`)
})