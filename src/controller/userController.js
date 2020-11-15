const {success, error} = require('../helpers/response')
const index = require('../models/index')
const User = index.User

exports.register = async (req, res) => {
    try {
        let newUser = await User.create(req.body)
        success(res, newUser, 201)
    }
    catch(err) {error(res, err, 422)}
}

exports.login = async (req, res) => {
    try {
        success(res, 'data here', 200)
    }
    catch(err) {error(res, err, 422)}
}

exports.getProfile = async (req, res) => {
    try {
        success(res, 'data here', 200)
    }
    catch(err) {error(res, err, 422)}
}

exports.getHistory = async (req, res) => {
    try {
        success(res, 'data here', 200)
    }
    catch(err) {error(res, err, 422)}
}