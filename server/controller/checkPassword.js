const UserModel = require('../models/UserModel');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function checkPassword(request, response) {
    try {
        const { password, userId } = request.body;
        
        const user = await UserModel.findById(userId);

        const verifyPassword = await bcryptjs.compare(password, user.password);

        if (!verifyPassword) {
            return response.status(400).json({ message: 'Password not matched', error: true });
        }

        const tokenData = {
            id: user._id,
            email: user.email,
        }

        const token = await jwt.sign( tokenData, process.env.JWT_SECRET, { expiresIn: '1d' });

        const cookieOptions = {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days
            http: true,
            secure: true,
        };

        return response.cookie('token', token, cookieOptions).status(200).json({ message: 'Login Successfully', token: token, success: true });


    }
    catch (error) {
        return response.status(500).json({ message: error.message || error, error: true });
    }
}

module.exports = checkPassword;