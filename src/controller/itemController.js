const {success, error} = require('../helpers/response')
const index = require('../models/index')
const User = index.User
const History = index.History
const Item = index.Item
const Order = index.Order

exports.createItem = async (req, res) => {
    try {
        let newItem = "YOU'RE NOT AN ADMIN"
        if (req.user.isAdmin) {
            newItem = await Item.create({
                name: req.body.name,
                category: req.body.category,
                price: req.body.price,
                description: req.body.description,
                // image: Sequelize.STRING,
                totalStock: req.body.totalStock,
            })
        }
        success(res, newItem, 201)
    }
    catch(err) {error(res, err, 422)}
}

exports.getAllItem = async (req, res) => {
    try {
        let items = await Item.findAll()
        // try many filter with req.query
        success(res, items, 200)
    }
    catch(err) {error(res, err, 422)}
}

exports.getOneItem = async (req, res) => {
    try {
        // create history
        let item = await Item.findByPk(req.params.itemId)
        if (req.user) {
            await History.create({
                itemId: req.params.itemId,
                userId: req.user.id
            })
        }
        success(res, item, 200)
    }
    catch(err) {error(res, err, 422)}
}

exports.buyItem = async (req, res) => {
    try {
        // create order
        let newOrder = await Order.create({
            ItemId: req.params.itemId,
            userId: req.user.id,
            address: req.body.address,
            status: 'Waiting for Payment'
        })
        await Item.increment('totalSold', {
            by: 1,
            where: {id: req.params.itemId}
        })
        success(res, newOrder, 200)
    }
    catch(err) {error(res, err, 422)}
}