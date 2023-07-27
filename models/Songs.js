const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  sampleSongs: { type: String, required: true },
  sampleArtists: { type: String, required: true },
  samplePopularSongs: { type: Number, required: true },
});

module.exports = mongoose.model('Song', songSchema);