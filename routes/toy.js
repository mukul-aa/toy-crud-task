const express       = require('express')
const router        =express.Router()

const ToyController       = require('../controllers/ToyController')
const authenticate         = require('../middleware/authenticate')

router.get('/', ToyController.index)
router.post('/show', ToyController.show)
router.post('/store', ToyController.store)
router.post('/update', ToyController.update)
router.post('/delete', ToyController.destroy)

module.exports = router 