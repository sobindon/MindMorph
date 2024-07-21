const express = require('express');
const router = express.Router();

const controller = require('../../controller/assignment/instructor')

router.post('/createassignment',controller.createAssignment);
router.get('/getcreatedassignment/:id',controller.getCreatedAssignment)
router.patch('/updateassignment',controller.updateAssignment)
router.delete('/deleteassignment/:id',controller.deleteAssignment)
router.get('/assignments/:id',controller.getAssignments)

module.exports = router