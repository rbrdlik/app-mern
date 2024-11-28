const Album = require('../models/album');

exports.getAllAlbums = async (req, res, next) => {
    try {
        const data = await Album.find();
        if (data && data.length !== 0) {
            return res.status(200).send({
                message: "Albums found!",
                payload: data
            });
        }
        res.status(500).send({
            message: "Albums not found!"
        })
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.getAlbumById = async (req, res, next) => {
    try {
        const data = await Album.findById(req.params.id);
        if (data) {
            return res.status(200).send({
                message: "Album found!",
                payload: data
            });
        }
        res.status(500).send({
            message: "Album not found!"
        })
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.createAlbum = async (req, res, next) => {
    try {
        const data = new Album({
            name: req.body.name,
            artist: req.body.artist, 
            year: req.body.year
        })
        const result = await data.save();
        if(result){
            return res.status(201).send({
                message: "Album created!",
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

exports.updateAlbum = async (req, res, next) => {
    try {
        const data = {
            name: req.body.name,
            artist: req.body.artist, 
            year: req.body.year
        };
        const result = await Album.findByIdAndUpdate(req.params.id, data);
        if(result){
            return res.status(200).send({
                message: "Album updated!",
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

exports.deleteAlbum = async (req, res, next) => {
    try {
        const data = {
            name: req.body.name,
            artist: req.body.artist, 
            year: req.body.year
        };
        const result = await Album.findByIdAndDelete(req.params.id, data);
        if(result){
            return res.status(200).send({
                message: "Album deleted!",
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
