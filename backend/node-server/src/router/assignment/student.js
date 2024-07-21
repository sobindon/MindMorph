const express = require('express');
const router = express.Router();
const controller = require('../../controller/assignment/student')

router.get('/getassignments/:enrolledCourseid',controller.getAllAssignments)
router.post('/submitassignment',controller.submitAssignment);
router.patch('/updateassignment',controller.updateAssignment)

module.exports = router