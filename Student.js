const mongoose = require('mongoose')
const StudentSchema = mongoose.Schema({
    name:{type:String,default:'None'},
    age:{type:Number,min:18,max:30},
    city:{type:String},
    marks:{type:Number,min:30,max:100}
    
},{versionKey:false})
module.exports = mongoose.model('student',StudentSchema);