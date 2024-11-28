const Book = require('../models/book');

exports.getAllBooks = async (req, res, next) => {
    try {
        const data = await Book.find();
        if (data && data.length !== 0) {
            return res.status(200).send({
                message: "Books found!",
                payload: data
            });
        }
        res.status(500).send({
            message: "Books not found!"
        })
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.getBookById = async (req, res, next) => {
    try {
        const data = await Book.findById(req.params.id);
        if (data) {
            return res.status(200).send({
                message: "Book found!",
                payload: data
            });
        }
        res.status(500).send({
            message: "Book not found!"
        })
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.createBook = async (req, res, next) => {
    try {
        const data = new Book({
            name: req.body.name,
            author: req.body.author, 
            genre: req.body.genre
        })
        const result = await data.save();
        if(result){
            return res.status(201).send({
                message: "Book created!",
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

exports.updateBook = async (req, res, next) => {
    try {
        const data = {
            name: req.body.name,
            author: req.body.author, 
            genre: req.body.genre
        };
        const result = await Book.findByIdAndUpdate(req.params.id, data);
        if(result){
            return res.status(200).send({
                message: "Book updated!",
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

exports.deleteBook = async (req, res, next) => {
    try {
        const data = {
            name: req.body.name,
            author: req.body.author, 
            genre: req.body.genre
        };
        const result = await Book.findByIdAndDelete(req.params.id, data);
        if(result){
            return res.status(200).send({
                message: "Book deleted!",
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
