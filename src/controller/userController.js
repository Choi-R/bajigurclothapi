const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const {success, error} = require('../helpers/response')
const index = require('../models/index')
const User = index.User
const History = index.History
const Order = index.Order

exports.register = async (req, res) => {
    try {
        let newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            isAdmin: req.body.isAdmin
        })
        let token = jwt.sign({id: newUser.id, isAdmin: newUser.isAdmin}, process.env.SECRET_KEY)

        success(res, {
            name: req.body.name,
            email: req.body.email,
            token: token
        }, 201)
    }
    catch(err) {error(res, err, 422)}
}

exports.login = async (req, res) => {
    try {
        let user = await User.findOne({where: { email: req.body.email }})
        let token = bcrypt.compareSync(req.body.password, user.password) ? jwt.sign({id: user.id, isAdmin: user.isAdmin}, process.env.SECRET_KEY) : 'WRONG EMAIL OR PASSWORD'
        success(res, token, 200)
    }
    catch(err) {error(res, err, 422)}
}

exports.getProfile = async (req, res) => {
    try {
        let user
        if (req.query.name) {
            user = await User.findOne({
                attributes: {exclude: ['password', 'isAdmin']},
                where: {name: req.query.name}
            })
        }
        else if (req.user) {
            user = await User.findOne({                
                attributes: {exclude: ['password', 'isAdmin']},
                where: {id: req.user.id}
        })
        }
        success(res, user, 200)
    }
    catch(err) {error(res, err, 422)}
}

exports.getHistory = async (req, res) => {
    try {
        let histories = await History.findAll({
            attributes: {exclude: ['userId']},
            include: [{ all: true, nested: true }],
            where: {userId: req.user.id}})
        success(res, histories, 200)
    }
    catch(err) {error(res, err, 422)}
}

exports.getOrder = async (req, res) => {
    try {
        let orders = await Order.findAll({
            attributes: {exclude: ['userId']},
            where: {userId: req.user.id}})
        success(res, orders, 200)
    }
    catch(err) {error(res, err, 422)}
}
