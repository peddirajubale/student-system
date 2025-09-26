const express = require("express");
const router = express.Router();

const studentController = require('../controllers/studentController')
const student = require('../models/StudentDetails')

router.post('/add-student', studentController.addStudent)
router.get('/get-students', studentController.getStudents)
router.get('/student/:id',studentController.singleStudent)
router.put('/update/:id',studentController.updatedStudent)
router.delete('/delete/:id', studentController.deleteStudent)

module.exports = router