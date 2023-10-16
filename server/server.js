// lib
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
// db connection
const connectDB = require('./config/db');
// port number
const PORT = 5000 || process.env.PORT;

// connect to db
connectDB();

// create app
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

// import router
app.use('/dramas', require('./routes/routes'));

// check if the app is running
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

