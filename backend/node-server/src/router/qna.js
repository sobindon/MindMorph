const express = require('express')
const router = express.Router();
const { createQna, createQnaReply, deleteQna, deleteQnaReply } = require('../controller/qna')

router.post('/question', createQna)
router.post('/reply/:id', createQnaReply)
router.delete('/question/:id', deleteQna)
router.delete('/reply/:id', deleteQnaReply)

module.exports = router