//import required modules

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

//Initialize Express App

const app = express();
const PORT = process.env.PORT || 5000;

//Middleware Setup
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('MongoDB connected'))
.catch(() => console.error('MongoDB connection error:', error));

//Define Routes
app.get('/', (req, res) => {
    res.send('Server is running');
})

//Start the Server
app.listen(PORT, () => console.log(`server running on port ${PORT}`));