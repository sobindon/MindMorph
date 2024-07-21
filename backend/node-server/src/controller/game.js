const prisma = require('../../prisma/prisma')
const gameValidator = require('../validation/game')

const getGameByCourseCategory = async (req, res) => {
    const courseCategoryId = parseInt(req.params.id);

    try {
        // Find all games with their gamification data for the specified course category
        const games = await prisma.game.findMany({
            where: {
                courseCategoryId: courseCategoryId,
            },
            include: {
                gamificationData: true
            }
        });

        res.status(200).json({ games: games });
    } catch (error) {
        console.error(error);
        return res.status(400).json({ message: "Error occurred while fetching gamification data", error: error });
    }
}

const createGame = async (req, res) => {
    const { courseCategoryId, gamificationData } = req.body;

    // Validate the input (optional, add your validation logic here if needed)
    if (!courseCategoryId || !Array.isArray(gamificationData) || gamificationData.length === 0) {
        return res.status(400).json({ message: "Invalid input" });
    }

    try {
        // Check if a game already exists in the given course category
        const existingGame = await prisma.game.findFirst({
            where: {
                courseCategoryId: courseCategoryId,
            }
        });

        if (existingGame) {
            return res.status(200).json({ message: "This game already exists" });
        } else {
            // Create the game along with its gamification data
            const newGame = await prisma.game.create({
                data: {
                    courseCategoryId: courseCategoryId,
                    gamificationData: {
                        create: gamificationData.map(data => ({
                            text: data.text,
                            imageUrl: data.imageUrl
                        }))
                    }
                },
                include: {
                    gamificationData: true
                }
            });
            res.status(201).json({ Game: newGame });
        }
    } catch (error) {
        console.error(error);
        return res.status(400).json({ message: "Error occurred while creating game", error: error.message });
    }
};


const updateGameByGameId = async (req, res) => {

    const { error, value } = await gameValidator.updateGameByGameId.validate({ ...req.body });
    console.log(value);

    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }


    // Check if the game exists
    const existingGame = await prisma.game.findUnique({
        where: { id: value.gameId }
    });

    if (!existingGame) {
        return res.status(404).json({ message: "Game not found" });
    } else {
        try {
            // Update the game
            const updatedGame = await prisma.game.update({
                where: { id: value.gameId },
                data: {

                    courseCategoryId:value.courseCategoryId,
                    gamificationData: {
                        update: {
                            where: { id: value.gamificationDataId },
                            data: {
                                text: value.text,
                                imageUrl: value.imageUrl,
                            },
                        },
                    }

                },
                include: {
                    gamificationData: true,

                },
            });

            res.status(200).json({
                message: 'Game and related data updated successfully',
                updatedGame,
            });
        } catch (error) {
            console.error('Error updating game:', error);
            res.status(500).json({
                message: 'An error occurred while updating the game',
                error: error.message,
            });
        }
    }
}

const deleteGameByGameId = async (req, res) => {
    const gameId = parseInt(req.params.id);

    // Check if the game exists
    const existingGame = await prisma.game.findUnique({
        where: { id: gameId }
    });

    if (!existingGame) {
        return res.status(404).json({ message: "Game not found" });
    } else {

        // Delete the game and its associated gamificationData
        try {
            // Delete the game and related records
            const deletedGame = await prisma.game.delete({
                where: {
                    id: gameId,
                },
                include: {
                    gamificationData: true,
                    GameView: true,
                },
            });

            res.status(200).json({
                message: 'Game and related data deleted successfully',
                deletedGame,
            });
        } catch (error) {
            console.error('Error deleting game:', error);
            res.status(500).json({
                message: 'An error occurred while deleting the game',
                error: error.message,
            });
        }
    }
}

module.exports = { createGame, getGameByCourseCategory, updateGameByGameId, deleteGameByGameId }