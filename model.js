const mongoose=require('mongoose')

const Schema=mongoose.Schema

const librarySchema=  new Schema({
    
    Title:{type:String,required:true},
    Author:{type:String,required:true},
    Year_of_publication:{type:Date,required:true}
})


module.exports=mongoose.model('library',librarySchema);

