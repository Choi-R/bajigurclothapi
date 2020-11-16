const jwt = require('jsonwebtoken')

exports.authenticate = (req, res, next) => {
    try {
        if (req.headers.authorization) {
            let token = req.headers.authorization;
            let payload = jwt.verify(token, process.env.SECRET_KEY);
            req.user = payload;
        }
        next()
    }
    catch (err) {
        return res.status(401).json({
            status: false,
            errors: 'Invalid token'
        })
    }
}