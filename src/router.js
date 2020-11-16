const router = require('express').Router()
const userController = require('./controller/userController')
const itemController = require('./controller/itemController')
const {authenticate} = require("./middlewares/auth")

router.post('/user', userController.register)
router.put('/user', userController.login)
router.get('/user', authenticate, userController.getProfile)
router.get('/history', authenticate, userController.getHistory)

router.post('/item', authenticate, itemController.createItem)
router.get('/item', itemController.getAllItem)
router.get('/item/:itemId', authenticate, itemController.getOneItem)
router.put('/buy/:itemId', authenticate, itemController.buyItem)

module.exports = router