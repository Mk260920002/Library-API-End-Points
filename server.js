const express=require('express')
const app=express()
const path=require('path')
require('dotenv').config();


const PORT=process.env.PORT || 3000
const mongoose=require('mongoose')


const url=process.env.MONGO_CONNECTION_URL;
console.log(url);
mongoose.connect(url);
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log('Databse connected....');
});
const server=app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})
require('.web.js')(app)

