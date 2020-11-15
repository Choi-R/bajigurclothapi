

exports.createItem = async (req, res) => {
    try {
        success(res, 'data here', 200)
    }
    catch(err) {error(res, err, 422)}
}

exports.getAllItem = async (req, res) => {
    try {
        // try many filter with req.query
        success(res, 'data here', 200)
    }
    catch(err) {error(res, err, 422)}
}

exports.getOneItem = async (req, res) => {
    try {
        // create history
        success(res, 'data here', 200)
    }
    catch(err) {error(res, err, 422)}
}

exports.buyItem = async (req, res) => {
    try {
        // create order
        success(res, 'data here', 200)
    }
    catch(err) {error(res, err, 422)}
}