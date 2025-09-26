
const mongoose  = require('mongoose')

const studentDetailsSchema = new mongoose.Schema({
  studentId:{
    type:String,
    required:true,
    unique:true
  },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true},
  course: { type: String }
})

module.exports = mongoose.model("StudentDetails",
   studentDetailsSchema)