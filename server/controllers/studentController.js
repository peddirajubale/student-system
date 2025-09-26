const StudentDetails = require('../models/StudentDetails')

// add Student

const addStudent = async(req, res)=>{
  try{
    const {studentId, name, email, phone, course} = req.body

    const newStudent = new StudentDetails({
      studentId,
      name,
      email,
      phone,
      course
    })
    await newStudent.save()
    res.status(201).json(newStudent)
  }catch(error){
    console.log('There is an error: ',error)
    res.status(500).json({message: 'Server error'})
  }
}

// Get all students

const getStudents = async(req, res)=>{
  try{
    const students = await StudentDetails.find()
    res.status(200).json(students)
  }catch(error){
    console.log('There is an error:' , error)
    res.status(500).json({message:'server error'})
  }
}

const singleStudent = async(req, res)=>{
  try{
     const student = await StudentDetails.findById(req.params.id)
     if (!student){
      return res.status(404).json({message: 'Student not found'})
     }
     res.status(200).json(student)
  }catch(error){
    console.log('There is an error:',error)
    res.status(500).json({message:'server error'})
  }
}

 // Update student

 const updatedStudent = async (req, res)=>{
    try{
      const { studentId, name, email, phone, course } = req.body 
      const myStudent = await StudentDetails.findByIdAndUpdate(
        req.params.id,
        {studentId,name,email,phone,course}
      )
      if(!myStudent){
        return res.status(404).json({message:'student not found'})
      }
      res.status(200).json(myStudent)
    }catch(error){
    console.log('There is an error:',error)
    res.status(500).json({message:'server error'})
  }
 }

 //Delete student
const deleteStudent = async (req, res) => {
  try {
    const deletedStudent = await StudentDetails.findByIdAndDelete(req.params.id)

    if (!deletedStudent) {
      return res.status(404).json({ message: 'Student not found' })
    }

    res.status(200).json({ message: 'Student deleted successfully' })
  } catch (error) {
    console.log('There is an error:', error)
    res.status(500).json({ message: 'Server error' })
  }
}

module.exports={addStudent,getStudents,
  singleStudent,updatedStudent,deleteStudent}