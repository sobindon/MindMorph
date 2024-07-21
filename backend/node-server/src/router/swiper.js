const express = require('express')
const router = express.Router();
const upload = require('../middleware/fileUpload');
const {uploadSwiper,getASwiper,getAllSwiper,changeVisiblity,deleteSwipper} = require('../controller/swiper')

router.post('/', upload('swiper', 'image'), uploadSwiper);
router.patch('/:id',changeVisiblity)
router.get('/:id',getASwiper);
router.get('/',getAllSwiper)
router.delete('/:id',deleteSwipper)

module.exports = router