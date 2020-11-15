const router = require('express').Router()
const userController = require('./controller/userController')
const itemController = require('./controller/itemController')

router.post('/user', userController.register)
router.put('/user', userController.login)
router.get('/user', userController.getProfile)
router.get('/history', userController.getHistory)

router.post('/item', itemController.createItem)
router.get('/item', itemController.getAllItem)
router.get('/item/:id', itemController.getOneItem)
router.put('/buy/:id', itemController.buyItem)

module.exports = router