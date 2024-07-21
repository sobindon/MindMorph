const express = require('express')
const router = express.Router()
const { getEnrolledCourses, enrollCourse, unenroll } = require('../controller/enrolledCourse')

router.get('/:id', getEnrolledCourses)
router.post('/', enrollCourse)
router.delete('/:id', unenroll)

module.exports = router