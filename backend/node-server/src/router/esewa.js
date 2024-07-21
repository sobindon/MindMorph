const express = require('express')
const router = express.Router()
const {esewarequest,esewaResponse} = require('../controller/esewa')

router.get('/esewa',esewarequest)
router.get('/paymentSuccess/',esewaResponse)

module.exports=router