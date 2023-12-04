const mongoose = require('mongoose');
const Dramas = require('../models/dramaSchema');
const User = require('../models/userSchema');

// POST -> all of the dramas in the db
const getDrama = async(req, res) => {
    const userID = await req.body.id;

    // check if that user exists
    if (!userID) {
        res.status(400);
        throw new Error('No such user exists.');
    }

    // check which dramas correspond to the user
    const dramas = await Dramas.find({ savedDramaUser: userID });

    if(!dramas) {
        res.status(200).json({ status: 'error', error: 'No dramas exist.' });
    }

    res.status(200).json(dramas);
}

// POST -> add new drama into the dramalist db
const addDrama = async(req, res) => {
    const data = await req.body;

    if(!data) {
        res.status(400);
        throw new Error('Please fill all data fields.');
    }

    const newDrama = await Dramas.create(data);
    await newDrama.save();

    // if POST req was a success
    res.status(200).json({ status: 'ok', newDrama });
}

// PUT -> delete dramas in the dramalist db
const deleteDrama = async(req, res) => {
    const id = await req.params.id;

    // check if the fields for id
    if(!id) {
        res.status(400);
        throw new Error('Drama does not exist');
    }

    // edit the existing field using the id 
    await Dramas.findByIdAndDelete(id);
    res.status(200).send('Drama deleted.');
}

module.exports = { getDrama, addDrama, deleteDrama };