const mongoose = require('mongoose');
const Dramas = require('../models/dramaSchema');

// GET -> all of the dramas in the db
const getDrama = async(req, res) => {
    const data = await Dramas.find({});

    // if no data exists in the db
    if(!data) {
        res.status(400);
        throw new Error('No dramas found.');
    }

    // if data exists 
    res.status(200).json(data);
}

// POST -> add new drama into the dramalist db
const addDrama = async(req, res) => {
    const data = await req.body;

    if(!data) {
        res.status(400);
        throw new Error('Please fill all data fields.');
    }

    const newDrama = new Dramas(data);
    await newDrama.save();

    // if POST req was a success
    res.status(200).send('New drama added.');
}

// PUT -> edit dramas in the dramalist db
const editDrama = async(req, res) => {
    const id = await req.params.id;
    const data = await req.body;

    // check if the fields for id
    if(!id) {
        res.status(400);
        throw new Error('Drama does not exist');
    }
    // check if the body is empty
    if(!data) {
        res.status(400);
        throw new Error('Please fill all data fields.');
    }

    // edit the existing field using the id 
    await Dramas.findByIdAndUpdate(id, data);
    res.status(200).send('Drama edited.');
}

// PUT -> edit dramas in the dramalist db
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

module.exports = { getDrama, addDrama, editDrama, deleteDrama };