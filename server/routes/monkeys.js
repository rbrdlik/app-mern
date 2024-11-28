const express = require('express');
const router = express.Router();

const monkeysController = require('../controllers/monkeys');

router.get('/', monkeysController.getAllMonkeys);

router.get('/:id', monkeysController.getMonkeyById);

router.post('/', monkeysController.createMonkey);

router.put('/:id', monkeysController.updateMonkey);

router.delete('/:id', monkeysController.deleteMonkey);

module.exports = router;
