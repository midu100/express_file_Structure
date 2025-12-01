const mongoose = require('mongoose')

const dbConfig = ()=>{
    mongoose.connect('mongodb+srv://filefolder:filefolder@cluster0.kzi42f2.mongodb.net/fileTest?appName=Cluster0')
       .then(() => console.log('DB Connected!'));
}


module.exports= dbConfig  // dbConfig file ta ke export kora hoiyeche