const Monkey = require('../models/monkeys');

exports.getAllMonkeys = async (req, res, next) => {
    try {
        const data = await Monkey.find();
        if (data && data.length !== 0) {
            return res.status(200).send({
                message: "Monkeys found!",
                payload: data
            });
        }
        res.status(500).send({
            message: "Monkeys not found!"
        })
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.getMonkeyById = async (req, res, next) => {
    try {
        const data = await Monkey.findById(req.params.id);
        if (data) {
            return res.status(200).send({
                message: "Monkey found!",
                payload: data
            });
        }
        res.status(500).send({
            message: "Monkey not found!"
        })
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.createMonkey = async (req, res, next) => {
    try {
        const data = new Monkey({
            gender: req.body.gender,
            race: req.body.race, 
            name: req.body.name
        })
        const result = await data.save();
        if(result){
            return res.status(201).send({
                message: "Monkey created!",
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

exports.updateMonkey = async (req, res, next) => {
    try {
        const data = {
            gender: req.body.gender,
            race: req.body.race, 
            name: req.body.name
        };
        const result = await Monkey.findByIdAndUpdate(req.params.id, data);
        if(result){
            return res.status(200).send({
                message: "Monkey updated!",
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

exports.deleteMonkey = async (req, res, next) => {
    try {
        const data = {
            gender: req.body.gender,
            race: req.body.race, 
            name: req.body.name
        };
        const result = await Monkey.findByIdAndDelete(req.params.id, data);
        if(result){
            return res.status(200).send({
                message: "Monkey deleted!",
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
