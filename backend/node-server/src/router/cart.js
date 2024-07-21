const express = require('express')
const router = express.Router()
const { getCartItems, addToCart, deletCartItems } = require('../controller/cart')

router.get('/:id', getCartItems)
router.post('/', addToCart)
router.delete('/:id', deletCartItems)

module.exports = router