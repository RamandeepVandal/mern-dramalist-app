const mongoose = require('mongoose');
const User = require('../models/userSchema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// POST REQUEST
// Register the user
const registerUser = async (req, res) => {
    try {
        // hash the password
        const newPassword = await bcrypt.hash(req.body.password, 10);

        // create the user
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: newPassword
        });

        res.status(200).json({ message: 'Account created!' });
    } catch (error) {
        res.status(400).json({error: 'Account with this email already exists.'});
    }
}

// POST REQUEST
// Login
const userLogin = async(req, res) => {
    // check if email exists
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        res.status(400).json({error: 'Account does not exist.'});
    }
    
    // check if password matches
    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);

    if(isPasswordValid) {
        const token = jwt.sign({
            id: user._id
        }, process.env.JWT_SECRET);
    
        return res.status(200).json({user: token, id: user._id});
    } else {
        return res.status(400).json({error: 'Incorrect Password, Try Again.'})
    }
}

module.exports = { registerUser, userLogin };