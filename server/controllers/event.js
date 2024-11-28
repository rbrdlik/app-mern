const Event = require('../models/event');

exports.getAllEvents = async (req, res, next) => {
    try {
        const data = await Event.find();
        if (data && data.length !== 0) {
            return res.status(200).send({
                message: "Events found!",
                payload: data
            });
        }
        res.status(500).send({
            message: "Events not found!"
        })
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.getEventById = async (req, res, next) => {
    try {
        const data = await Event.findById(req.params.id);
        if (data) {
            return res.status(200).send({
                message: "Event found!",
                payload: data
            });
        }
        res.status(500).send({
            message: "Event not found!"
        })
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.createEvent = async (req, res, next) => {
    try {
        const data = new Event({
            name: req.body.name,
            date: req.body.date, 
            game: req.body.game,
            members: req.body.members
        })
        const result = await data.save();
        if(result){
            return res.status(201).send({
                message: "Event created!",
                payload: result,
            })
        }
        res.status(500).send({
            message: "Wrong input!",
        })
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.updateEvent = async (req, res, next) => {
    try {
        const data = {
            name: req.body.name,
            date: req.body.date, 
            game: req.body.game,
            members: req.body.members
        };
        const result = await Event.findByIdAndUpdate(req.params.id, data);
        if(result){
            return res.status(200).send({
                message: "Event updated!",
                payload: result,
            })
        }
        res.status(500).send({ 
            message: "Wrong input!",
        })
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.deleteEvent = async (req, res, next) => {
    try {
        const data = {
            name: req.body.name,
            date: req.body.date, 
            game: req.body.game,
            members: req.body.members
        };
        const result = await Event.findByIdAndDelete(req.params.id, data);
        if(result){
            return res.status(200).send({
                message: "Event deleted!",
                payload: result,
            })
        }
        res.status(500).send({
            message: "Wrong input!",
        })
    } catch (err) {
        res.status(500).send(err);
    }
};
