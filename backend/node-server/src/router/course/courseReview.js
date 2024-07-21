const express = require('express')
const router = express.Router()

const { getCourseReviews, createCourseReview, courseReviewReply, deleteCourseReview, deleteCourseReviewReply } = require('../../controller/course/courseReview')

router.get('/:id', getCourseReviews)
router.post('/', createCourseReview)
router.post('/:id', courseReviewReply)
router.delete('/:id', deleteCourseReview)
router.delete('/reply/:id', deleteCourseReviewReply)


module.exports = router 