const express = require('express')
const router = express.Router()
const {createMcq,getMcqByLectureId,updateMcq,deleteMcq} = require('../controller/mcq')

router.get('/mcq/:id',getMcqByLectureId)
router.post('/mcq',createMcq)
router.patch('/mcq/:id',updateMcq)
router.delete('/mcq/:id',deleteMcq)

module.exports = router