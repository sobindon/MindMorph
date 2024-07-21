const Joi = require('joi');

const createGame = Joi.object({
    courseCategoryId:Joi.number().required()
    // text:Joi.string().required(),
    // imageUrl:Joi.string()
})

const updateGameByGameId = Joi.object({
    gameId:Joi.number().required(),
    gamificationDataId:Joi.number(),
    courseCategoryId:Joi.number(),
    text:Joi.string(),
    imageUrl:Joi.string()
})


module.exports = {createGame,updateGameByGameId}