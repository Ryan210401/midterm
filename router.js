// router.js
const express = require('express');
const router = express.Router();

const handler = require('./handler');

// API endpoints
router.get('/songs', handler.getAllSongs);
router.get('/songs/:id', handler.getSongById);
router.post('/songs', handler.createSong);
router.put('/songs/:id', handler.updateSong);
router.delete('/songs/:id', handler.deleteSong);

module.exports = router;
