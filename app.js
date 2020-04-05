const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv/config');

const app = express();
app.use(cors())

// MIDDLEWARE

app.use(bodyParser.json());

// DATABASE CONNECTION

mongoose.connect(
    process.env.DB_CONNECTION
    ,
    { useNewUrlParser: true },
    () => {
        console.log('Connected to Database Successfuly');
    })

// POST ROUTE CONFI

const postRoute = require('./Routs/posts');

app.use('/posts', postRoute);


// APP LISTEN AT :
app.listen(3000)