const mongoose=require('mongoose')

const Schema=mongoose.Schema

const librarySchema=  new Schema({
    id:{type:Number,required:true},
    Title:{type:String,required:true},
    Author:{type:String,required:true},
    Year_of_publication:{type:String,required:true}
})


module.exports=mongoose.model('library',menuSchema);

