// const jwt = require('jsonwebtoken');
// require('dotenv').config();

// const auth = (req, res, next) => {
//     const authHeader = req.headers['authorization'];
//     if (!authHeader) {
//         return res.status(400).json({ error: 'no authorization header' });
//     }
//     if (!authHeader.startsWith('Bearer ')) {
//         return res.status(400).json({ error: 'Invalid authorization header format' });
//     }
//     const token = authHeader.split(' ')[1];
//     try {
//         const decode = jwt.verify(token, process.env.SECRET);
//         // req.body.admin = decode.email;
//         req.admin = { id: decode.id, email: decode.email };
//         next();
//     } catch (e) {
//         return res.status(400).json({ message: 'Invalid or expired token', error: `${e.message}` });
//     };
// };

// module.exports = auth;







const jwt = require('jsonwebtoken');
require('dotenv').config();

const auth = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(400).json({ error: 'No authorization header' });
    }
    if (!authHeader.startsWith('Bearer ')) {
        return res.status(400).json({ error: 'Invalid authorization header format' });
    }

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.SECRET);
        
        // Token expiration is automatically checked by `jwt.verify`
        // If the token is expired, an error will be thrown

        req.admin = { id: decoded.id, email: decoded.email }; // Attach admin details to request
        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token has expired' });
        }
        return res.status(400).json({ message: 'Invalid token', error: error.message });
    }
};

module.exports = auth;
