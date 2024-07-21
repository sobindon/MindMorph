const prisma = require('../../prisma/prisma')
const cartSchema = require('../validation/cart')

const getCartItems = async (request, response) => {
    const userId = parseInt(request.params.id)
    try {
        items = await prisma.cart.findMany({
            where: {
                userId: userId
            }
        })
        return response.status(200).json({ items })
    } catch (error) {
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}

const addToCart = async (request, response) => {
    const { error, value } = cartSchema.cart.validate({
        ...request.body
    })
    // If Joi validation fails, send an error response
    if (error) return res.status(400).json({ message: error.details[0].message });

    try {
        await prisma.cart.create({
            data: value
        })
        return response.status(200).json({ message: "Added to Cart" })
    } catch (error) {
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}

const deletCartItems = async (request, response) => {
    const id = parseInt(request.params.id)
    try {
        await prisma.cart.delete({
            where: {
                id: id
            }
        })
        return response.status(200).json({ message: "Item deleted successfully" })
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = { getCartItems, addToCart, deletCartItems }