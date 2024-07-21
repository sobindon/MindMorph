const express = require('express')
const router = express.Router()
const { createGame,getGameByCourseCategory,updateGameByGameId,deleteGameByGameId } = require('../controller/game')

router.get('/game/:id',getGameByCourseCategory)
router.post('/game',createGame)
router.patch('/game',updateGameByGameId)
router.delete('/game/:id',deleteGameByGameId)

module.exports = router