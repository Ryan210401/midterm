const Song = require('./models/Song'); 
const User = require('./models/User'); 

// Handler function to get all songs
exports.getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Handler function to get a specific song by ID
exports.getSongById = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    if (!song) {
      return res.status(404).json({ error: 'Song not found' });
    }
    res.json(song);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Handler function to create a new song
exports.createSong = async (req, res) => {
  try {
    const { title, artist, duration } = req.body;
    const newSong = await Song.create({ title, artist, duration });
    res.json(newSong);
  } catch (err) {
    res.status(400).json({ error: 'Bad Request' });
  }
};

// Handler function to update a song by ID
exports.updateSong = async (req, res) => {
  try {
    const { title, artist, duration } = req.body;
    const updatedSong = await Song.findByIdAndUpdate(
      req.params.id,
      { title, artist, duration },
      { new: true }
    );
    if (!updatedSong) {
      return res.status(404).json({ error: 'Song not found' });
    }
    res.json(updatedSong);
  } catch (err) {
    res.status(400).json({ error: 'Bad Request' });
  }
};

// Handler function to delete a song by ID
exports.deleteSong = async (req, res) => {
  try {
    const deletedSong = await Song.findByIdAndRemove(req.params.id);
    if (!deletedSong) {
      return res.status(404).json({ error: 'Song not found' });
    }
    res.json({ message: 'Song deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
