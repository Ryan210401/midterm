/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('songs');

// Create the "Songs" collection
db.createCollection("sampleSongs")

// Create the "Artists" collection
db.createCollection("sampleArtists")

// Create the "PopularSongs" collection
db.createCollection("samplePopularSongs")

//*
//1. Sample data for Songs
// Insert sample data into the "Songs" collection
db.sampleSongs.insertMany([
    {
        _id : 1,
        title: "Song 1",
        artist: "Artist 1",
        album: "Album 1"
    },
    {
        _id : 2,
        title: "Song 2",
        artist: "Artist 2",
        album: "Album 2"
    },
    { 
        _id : 3,
        title: "Song 3",
        artist: "Artist 3",
        album: "Album 3"
    },
    {
        _id : 4,
        title: "Song 4",
        artist: "Artist 4",
        album: "Album 4"
    },
    {   
        _id : 5,
        title: "Song 5",
        artist: "Artist 5",
        album: "Album 5"
    },
    {
        _id : 6,
        title: "Song 6",
        artist: "Artist 6",
        album: "Album 6"
    },
    {
        _id : 7,
        title: "Song 7",
        artist: "Artist 7",
        album: "Album 7"
    },
    {
        _id : 8,
        title: "Song 8",
        artist: "Artist 8",
        album: "Album 8"
    },
    {
        _id : 9,   
        title: "Song 9",
        artist: "Artist 9",
        album: "Album 9"
    },
    {
        _id : 10,
        title: "Song 10",
        artist: "Artist 10",
        album: "Album 10"
    }
]);




//*
//2.  Sample data for Artists
// Insert sample data into the "PopularSongs" collection
db.samplePopularSongs.insertMany([
    {
        _id : 1,
        name: "Artist 1",
        dateOfBirth: "1990-01-01",
        genres: ["Genre 1", "Genre 2"]
    },
    {
        _id : 2,
        name: "Artist 2",
        dateOfBirth: "1985-05-12",
        genres: ["Genre 2", "Genre 3"]
    },
    {
        _id : 3,
        name: "Artist 3",
        dateOfBirth: "1995-05-12",
        genres: ["Genre 3", "Genre 1"]
    },
    {
        _id : 4,
        name: "Artist 4",
        dateOfBirth: "1986-05-12",
        genres: ["Genre 1", "Genre 4"]
    },
    {
        _id : 5,
        name: "Artist 5",
        dateOfBirth: "1990-05-12",
        genres: ["Genre 1", "Genre 4"]
    },
    {
        _id : 6,
        name: "Artist 6",
        dateOfBirth: "1995-05-12",
        genres: ["Genre 5", "Genre 6"]
    },
    {
        _id : 7,
        name: "Artist 7",
        dateOfBirth: "2000-05-12",
        genres: ["Genre 4", "Genre 3"]
    },
    {
        _id : 8,
        name: "Artist 8",
        dateOfBirth: "1985-05-12",
        genres: ["Genre 8", "Genre 9"]
    },
    {
        _id : 9,
        name: "Artist 9",
        dateOfBirth: "1983-04-12",
        genres: ["Genre 2", "Genre 3"]
    },
    {
        _id : 10,
        name: "Artist 10",
        dateOfBirth: "1988-05-12",
        genres: ["Genre 10", "Genre 7"]
    }
]);




//*
//3.  Sample data for PopularSongs
// Insert sample data into the "PopularSongs" collection
db.samplePopularSongs.insertMany([
    {
        _id : 1,
        title: "Song 1",
        playCount: 1000,
        period: "2023-07",
    },
    {
        _id : 2,
        title: "Song 2",
        playCount: 800,
        period: "2023-07",
    },
    {
        _id : 3,
        title: "Song 3",
        playCount: 600,
        period: "2023-07",
    },
    {
        _id : 4,
        title: "Song 4",
        playCount: 500,
        period: "2023-07",
    },
    {
        _id : 5,
        title: "Song 5",
        playCount: 200,
        period: "2023-07",
    },
    {
        _id : 6,
        title: "Song 6",
        playCount: 700,
        period: "2023-07",
    },
    {
        _id : 7,
        title: "Song 7",
        playCount: 800,
        period: "2023-07",
    },
    {
        _id : 8,
        title: "Song 8",
        playCount: 800,
        period: "2023-07",
    },
    {
        _id : 9,
        title: "Song 9",
        playCount: 900,
        period: "2023-07",
    },
    {
        _id : 10,
        title: "Song 10",
        playCount: 1700,
        period: "2023-07",
    }   
]);
  


//*
// Retrieve sampleSongs collection
db.sampleSongs.find()

// Retrieve sampleArtists collection
db.sampleArtists.find()

// Retrieve samplePopularSongs collection
db.samplePopularSongs.find()

