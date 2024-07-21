const express = require('express');
const router = express.Router();
const { getCourseCategory, createCourseCategory, updateCourseCategory, deleteCourseCategory } = require('../../controller/course/courseCategory')

router.get('/:id', getCourseCategory)
router.post('/', createCourseCategory)
router.patch('/:id', updateCourseCategory)
router.delete('/:id', deleteCourseCategory)

module.exports = router