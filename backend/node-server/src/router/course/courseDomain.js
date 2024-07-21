const express = require('express');
const router = express.Router();
const { getCourseDomain, createCourseDomain, updateCourseDomain, deleteCourseDomain } = require('../../controller/course/courseDomain')

router.get('/:id', getCourseDomain)
router.post('/', createCourseDomain)
router.patch('/:id', updateCourseDomain)
router.delete('/:id', deleteCourseDomain)

module.exports = router