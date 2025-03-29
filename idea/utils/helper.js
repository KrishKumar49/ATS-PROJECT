const jwt = require('jsonwebtoken');
require('dotenv').config();

const createJWT = (email) => {
    const payLoad = { email };
    const token = jwt.sign(payLoad, process.env.SECRET,
        {
            expiresIn: '120'
        }
    );
    const expiresIn = new Date(Date.now() + 60 * 1000).toISOString();
    return { token, expiresIn };
}

module.exports = {
    createJWT
}