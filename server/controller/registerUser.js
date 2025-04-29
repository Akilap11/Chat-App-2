const UserModel = require('../models/UserModel');
const bcrypt = require('bcryptjs');

async function registerUser(request,response){
    try{
        const {name, email, password, profile_pic} = request.body;

        const checkEmail = await UserModel.findOne({email});

        if(checkEmail){
            return response.status(400).json({message: 'Email already exists'});
        }

        // Hash the password before saving it to the database
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const payload = {
            name,
            email,
            password: hashedPassword,
            profile_pic
        };

        const user = new UserModel(payload);
        const userSaved = await user.save();

        return response.status(201).json({
            message: "user registered successfully",
            data : userSaved,
            success: true
        })

    } catch (error) {
        return response.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = registerUser;