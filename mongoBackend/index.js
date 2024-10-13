const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const User = require('./models/user');
const Concert = require('./models/concert');
const Festival = require('./models/festival');
const Performer = require('./models/performer');


const app = express();

dotenv.config();

const mongoURL = process.env.ATLAS_URI;

const port = 3000;

// Middleware to parse incoming JSON data
app.use(express.json());

// MongoDB connection string (change it to your connection)
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.error('Connection error', err));

// Basic route to check API status
app.get('/', (req, res) => {
    res.send('Welcome to the REST API!');
});

// Create a new user (POST)
app.post('/post/users', async (req, res) => {
    try {
        // Create a new User object with the request body data
        const newUser = new User(req.body);
        // Save the new user in the database
        await newUser.save();
        // Respond with the newly created user and status code 201 (Created)
        res.status(201).send(newUser);
    } catch (err) {
        // If there's an error (like validation issues), respond with status 400
        res.status(400).send({ error: err.message });
    }
});

// Create a new performer (POST)
app.post('/post/performers', async (req, res) => {
    try {
        // Create a new User object with the request body data
        const newPerformer = new Performer(req.body);
        // Save the new user in the database
        await newPerformer.save();
        // Respond with the newly created user and status code 201 (Created)
        res.status(201).send(newPerformer);
    } catch (err) {
        // If there's an error (like validation issues), respond with status 400
        res.status(400).send({ error: err.message });
    }
});

// Create a new festival (POST)
app.post('/post/festivals', async (req, res) => {
    try {
        // Create a new User object with the request body data
        const newFestival = new Festival(req.body);
        // Save the new user in the database
        await newFestival.save();
        // Respond with the newly created user and status code 201 (Created)
        res.status(201).send(newFestival);
    } catch (err) {
        // If there's an error (like validation issues), respond with status 400
        res.status(400).send({ error: err.message });
    }
});

// Create a new concert (POST)
app.post('/post/concert', async (req, res) => {
    try {
        // Create a new User object with the request body data
        const newConcert = new Concert(req.body);
        // Save the new user in the database
        await newConcert.save();
        // Respond with the newly created user and status code 201 (Created)
        res.status(201).send(newConcert);
    } catch (err) {
        // If there's an error (like validation issues), respond with status 400
        res.status(400).send({ error: err.message });
    }
});

// Basic route to check API status
app.get('/performers', (req, res) => {
    res.send('Welcome to the REST API!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
