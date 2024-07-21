const express = require('express');
const router = express.Router();
const { createSocialHandles, updateSocialHandles, deleteSocialHandles } = require('../controller/socialHandle/socialHandle')

router.post('/', createSocialHandles)
router.patch('/', updateSocialHandles)
router.delete('/', deleteSocialHandles)


module.exports = router;